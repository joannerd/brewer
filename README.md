# Brewer

Brewer is an application to connect beer enthusiasts. Users create brewery
travel guides and share brewery knowledge in a forum. Explore top guides, 
learn from the Brewer forum, and search for your favorite breweries.

[Brewer Live](https://junnac-brewer.herokuapp.com/#/)

![brewer-demo-gif](https://user-images.githubusercontent.com/32081352/89004586-5e3b1580-d2b7-11ea-8f4b-3167de9377bb.gif)

## Features

* [Overview of features](#Overview-of-features)
* [Dynamically generated brewery creation form](#Dynamically-generated-brewery-creation-form)
* [Backend Yelp integration](#Backend-Yelp-integration)
* [Interactive map markers](#Interactive-map-markers)
* [User profile and favorites](#User-profile-and-favorites)
* [Brewery search](#Brewery-search)
* [User login and registration](#User-login-and-registration)
* [Forum posts and comments](#Forum-posts-and-comments)

## Technologies

* Ruby on Rails
* React/Redux
* PostgreSQL
* Mapbox API
* Yelp REST API
* AWS S3

## Installation

1. Clone this repository to your local machine.
2. Install npm and bundle packages:
    ```sh
    npm install
    bundle install
    ```
3. Start the frontend and backend servers with these terminal commands:
    ```sh
    rails s
    npm start
    ```

## Overview of features

While developing the app's database schema, web API, and frontend application, I
kept in mind ways to scale the application for more user-interactivity-focused
features. The end-product utilizes Mapbox API to aid with clickable navigation
of the platform, Yelp API to gather information and opinions about each brewery,
and cloud storage (AWS S3 and Rails Active Storage) to reduce server load and
allow the application to scale.

### Dynamically generated brewery creation form

The `GuideForm` is a dynamically generated form for brewery guide creation. A
user begins by selecting a city from a dropdown menu. The dropdown menu has an
`onChange` listener that invokes the `updateCity` method to update the
component's `cityId` and `guideBreweries` state.

```js
const updateCity = (e) => {
  const id = parseInt(e.target.value, 10);
  const cityBreweries = breweries.filter(brewery => brewery.cityId === id);
  setCityId(id);
  setGuideBreweries(cityBreweries);
};
```

Based on the updated `guideBreweries` state, the `createBreweryInputFields`
method is invoked to generate a dropdown menu with breweries in the selected
city. A new dropdown menu is generated for each brewery input field.

If a brewery has already been selected (i.e. the brewery's ID is in the
`selectedBreweryIDs` state), a `disabled` select option will be generated for
that brewery. Rendering a `disabled` select option ensures that users will not
create a guide with duplicate breweries while communicating that previously
selected breweries are not available for selection.

```js
const createBreweryInputFields = (idx) => (
  <select
    required
    key={idx}
    defaultValue="Choose a favorite brewery"
    name="brewery"
    onChange={(e) => updateSelectedBreweryIDs(idx, e)}
  >
    <option disabled>Choose a favorite brewery</option>
    {guideBreweries.map((brewery) => {
      if (Object.values(selectedBreweryIDs).includes(brewery.id)) {
        return (
          <option disabled key={`${idx}-${brewery.id}`}>
            {brewery.name}
          </option>
        );
      }

      return (
        <option value={brewery.id} key={`${idx}-${brewery.id}`}>
          {brewery.name}
        </option>
      );
    })}
  </select>
);
```

Users can then create or delete additional brewery select menus to add or remove
breweries from the guide they are creating. The button to add a brewery invokes
the `createBreweryInput` method upon click, while the button to remove a brewery
invokes the `deleteBreweryInput` method upon click.

```js
const createBreweryInput = () => {
  if (numberOfBreweryInputs.length < 5) {
    const inputs = [...numberOfBreweryInputs];
    inputs.push(numberOfBreweryInputs.length + 1);
    setNumberOfBreweryInputs(inputs);
  }
};
```

The deletion of a brewery input field also updates the `selectedBreweryIDs`
state of the component, removing the brewery ID corresponding to the brewery
input removed.

```js
const deleteBreweryInput = () => {
  if (numberOfBreweryInputs.length > 1) {
    const inputs = numberOfBreweryInputs.slice(0, numberOfBreweryInputs.length - 1);
    setNumberOfBreweryInputs(inputs);
  }
  const selectedBreweries = { ...selectedBreweryIDs };
  delete selectedBreweries[numberOfBreweryInputs.length];
  setSelectedBreweryIDs(selectedBreweries);
};
```

### Backend Yelp integration

The first iteration of Yelp integration into the brewery pages simply
implemented the `fetch` API to send requests to the Yelp API upon mounting of
the `BreweryShow` component. I decided to improve the feature by refactoring and
moving the Yelp integration into a backend Rails controller. This way the Yelp
information is fetched within the component's `fetchBrewery` invocation, instead
of in additional front-end fetch requests.

This backend Yelp integration results in faster performance by minimizing the
front-end fetch requests within the `BreweryShow` component. In the updated
iteration, the `fetchBrewery` action creator function is dispatched in the
component's `useEffect` hook upon mounting of the `BreweryShow` component.

```js
useEffect(() => {
  setIsUpdated(false);
  dispatch(fetchBrewery(breweryId));
  return () => dispatch(clearBreweries());
}, [isUpdated]);
```

The dispatch of the `fetchBrewer` action creator function dispatches the
response of the `BreweryAPIUtil.fetchBrewery` function's GET request to
`/api/breweries/:id`.

```js
export const fetchBrewery = (breweryId) => dispatch => (
  BreweryAPIUtil.fetchBrewery(breweryId)
    .then(brewery => dispatch(receiveBrewery(brewery))));
```

The request to `/api/breweries/:id` is routed to the brewery controller's `show`
action, where the `@brewery` is found via the `id` parameter, and the brewery's
`@yelp` information is fetched by invoking the `search_yelp` helper method in
the brewery controller class.

```rb
def show
  @brewery = Brewery.find(params[:id])

  brewery_state = @brewery.city.state.split(' ')
  if brewery_state.length == 1
    brewery_state = @brewery.city.state[0] + @brewery.city.state[1]
  else
    brewery_state = brewery_state.map{|el| el[0]}.join('')
  end

  @yelp = search_yelp(
    @brewery.name.split(' ')[0],
    @brewery.address.split(',')[0],
    @brewery.city.name,
    brewery_state,
  )
  render '/api/breweries/show'
end
```

The `search_yelp` method uses the name and location of the fetched `@brewery` to
send a GET request to `https://api.yelp.com/v3/businesses/matches` and find the
brewery's `yelp_id`. The `yelp_id` is then used in a subsequent GET request to
`https://api.yelp.com/v3/businesses/:id/reviews` to fetch the brewery's
`yelp_info` and a GET request to
`https://api.yelp.com/v3/businesses/:id/reviews` to fetch the brewery's
`yelp_reviews`. The `search_yelp` method then returns the fetched `yelp_info`
and `yelp_reviews` as payload keys of the `yelp` object returned by the method.

```rb
def search_yelp(name, address, city, state)
  conn = Faraday.new(
    url: 'https://api.yelp.com/v3/businesses',
    headers: {
      'Content-Type' => 'application/json',
      'Accept' => 'application/json',
      'Authorization' => "Bearer #{ENV['YELP_API_KEY']}"
    },
    params: { country: 'US' },
  ) do |c|
    c.use Faraday::Request::UrlEncoded
    c.use Faraday::Response::Logger
  end

  yelp_res = conn.get(
    'matches',
    {
      name: name,
      address1: address,
      city: city,
      state: state,
    }
  )
  
  yelp_id = JSON.parse(yelp_res.body)['businesses'][0]['id']
  yelp_info = conn.get(yelp_id)
  yelp_reviews = conn.get("#{yelp_id}/reviews")    

  yelp = {
    info: JSON.parse(yelp_info.body),
    reviews: JSON.parse(yelp_reviews.body),
  }

  return yelp
end
```

After fetching a brewery and its Yelp information, the `show` action renders its
response in JSON via the `/api/breweries/show.json.jbuilder` file. Jbuilder
takes care of structuring the fetched data into a JSON structure with organized
payload keys (`favoritedBy`, `yelp`, `reviews`) for front-end consumption.

```rb
json.set! @brewery.id do
  json.partial! 'api/breweries/brewery', brewery: @brewery

  json.favoritedBy do
    if @brewery.favorites.length == 0
      json.favorites []
    else
      @brewery.favorites.each do |favorite|
        json.set! favorite.user_id do
          json.id favorite.id
        end
      end
    end
  end

  json.yelp do
    json.rating @yelp[:info]['rating']
    json.url @yelp[:info]['url']
    json.price @yelp[:info]['price']
    json.hours @yelp[:info]['hours'][0]
    json.reviewCount @yelp[:info]['review_count']
  end

  json.reviews do 
    json.array!(@yelp[:reviews]['reviews']) do |review|
      json.url review['url']
      json.text review['text']
      json.rating review['rating']

      json.user do
        json.name review['user']['name']
        json.profileUrl review['user']['profile_url']
        json.imageUrl review['user']['image_url']
      end

      json.timeCreated review['time_created']
    end
  end
end
```

### Interactive map markers

The `Map` component visualizes the distance between different guide breweries
and top brewery cities with Mapbox API. By default, the `Map` component hooks
into Redux to select the longitude and latitude coordinates for each city marker
to generate. Each city marker links to the city's page upon click.

```js
const generateMap = (places, minZoom, center) => {
  mapboxgl.accessToken = localStorage.getItem('mboxToken');
  const mapOptions = {
    container: 'map',
    minZoom,
    center,
    style: 'mapbox://styles/mapbox/dark-v9',
  };

  const mapbox = new mapboxgl.Map(mapOptions);
  const mapMarkerManager = new MarkerManager(mapbox);
  mapMarkerManager.updateMarkers(places);
};

useEffect(() => {
  if (cities.length) {
    const places = {};
    cities.forEach((city) => {
      places[city.id] = [city.lng, city.lat];
    });
    generateMap(places, 3, [-95, 38]);
  }
}, [cities]);
```

Alternatively, the `Map` component takes an optional `guide` prop to render
markers for each guide brewery.

```js
useEffect(() => {
  if (guide) {
    const { cityLng, cityLat, brewInfo } = guide;
    generateMap(brewInfo, 11.5, [cityLng, cityLat]);
  } else {
    dispatch(fetchCities());
  }

  return () => dispatch(clearCities());
}, [guide]);
```

### User profile and favorites

The `Profile` component uses `useSelector` hook to reference a specific user
based on the `userId` parameter. The `guides` and `breweries` in the Redux
store's state are payload values fetched by the `fetchUser` action creator
function for the `RECEIVE_USER` action type.

```js
const { userId } = useParams();
const profileUser = useSelector(state => {
  const user = state.entities.users[userId];
  user.guides = Object.values(state.entities.guides)
    .map(({ id, title }) => ({ id, title }));
  user.breweries = Object.values(state.entities.favorites)
    .map(({ id, name }) => ({ id, name }));
  return user;
});

useEffect(() => {
  dispatch(fetchUser(userId));
}, [userId]);
```

### Brewery search

The brewery search input field updates the `searchInput` and `searchResults`
state upon change. The `searchResults` state is updated by invoking the
`getSearchResults` method with the change event.

```js
onChange={e => {
  setSearchInput(e.target.value);
  getSearchResults(e.target.value);
}}
```

The current event target's value is set as the `searchTerm` parameter. Whenever
the `searchTerm` is not an empty string, the `searchItems` will be filtered
based on whether the `potentialResult` includes the `term` being searched.

```js
const getSearchResults = (searchTerm) => {
  if (searchTerm.length > 0) {
    const searchInputResults = searchItems.filter((item) => {
      const potentialResult = item.name.toLowerCase();
      const term = searchTerm.toLowerCase();
      return potentialResult.includes(term);
    });
    setSearchResults(searchInputResults);
  } else {
    setSearchResults([]);
  }
};
```

### User login and registration

The `SessionForm` component renders as a login form or a registration form based
on the path of the `match` prop. The `isLogin` boolean values is used to
determine the submit button's text value (`Log In` or `Sign Up`) and whether an
`Email` field or `Demo Login` button is hidden.

```js
const isLogin = match.path === '/login';
```

### Forum posts and comments

The `Forum` and `PostShow` components re-use the `PostCommentForm` for forum
post and comment creation. Upon creation of a post or comment, the component
automatically reloads to render the new content.
