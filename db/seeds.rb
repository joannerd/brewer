# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create({username: "DemoUser", password: "123456", email: "demo@email.com"})

City.create({name: "Asheville", state: "North Carolina", lat: 35.5951, lng: -82.5515})
City.create({name: "Austin", state: "Texas", lat: 30.2672, lng: -97.7431})
City.create({name: "Boston", state: "Massachusetts", lat: 42.3601, lng: -71.0589})
City.create({name: "Cincinnati", state: "Ohio", lat: 39.1031, lng: -84.5120})
City.create({name: "Denver", state: "Colorado", lat: 39.7392, lng: -104.9903})
City.create({name: "Grand Rapids", state: "Michigan", lat: 42.9634, lng: -85.6681})
City.create({name: "Indianapolis", state: "Indiana", lat: 39.7684, lng: -86.1581})
City.create({name: "Kalamazoo", state: "Michigan", lat: 42.2917, lng: -85.5872})
City.create({name: "Oakland", state: "California", lat: 37.8044, lng: -122.2712})
City.create({name: "Portland", state: "Maine", lat: 45.5051, lng: -122.6750})
City.create({name: "Richmond", state: "Virginia", lat: 37.5407, lng: -77.4360})
City.create({name: "San Diego", state: "California", lat: 32.7157, lng: -117.1611})
City.create({name: "Seattle", state: "Washington", lat: 47.6062, lng: -122.3321})


Brewery.create({
  name: "Lord Hobo Brewing Company",
  lat: 42.476323,
  lng: -71.128895,
  address: "5 Draper St, Woburn, MA 01801",
  website: "lordhobobrewing.com",
  city_id: 1,
  description: "With beer on a pedestal and adventure up our sleeve, we set out to craft style-defining New England beers that highlight paramount traits of quality ingredients. Like us, our beers are elegant yet raw, free-spirited yet sophisticated. Beer has a unique ability to bring all kinds of people together, from the Lords that only enjoy the finer things in life, to the Hobos that work hard to earn their small pleasures, great beer is an accessible luxury. Proudly brewed in Massachusetts, we’re bringing the New England beer experience to thirsty fans everywhere. We relish in the connection and find sanctuary in the beers that unite us. — Lords and Hobos alike, we all deserve to drink like royalty."
});
Brewery.create({
  name: "Bell's Brewery",
  lat: 42.295153,
  lng: -85.578998,
  address: "355 E Kalamazoo Ave, Kalamazoo, MI 49007",
  website: "bellsbeer.com",
  city_id: 3,
  description: "Bell's Brewery, Inc. is a family-owned brewing company with operations in Comstock and Kalamazoo, Michigan. Bell's brews acclaimed beers such as Hopslam Ale, Oberon Ale, and Two-Hearted Ale. It operates a brewpub and a store selling merchandise and homebrewing supplies at its Kalamazoo location."
});
Brewery.create({
  name: "Lamplighter Brewing Co.",
  lat: 42.368241,
  lng: -71.097918,
  address: "284 Broadway, Cambridge, MA 02139",
  website: "lamplighterbrewing.com",
  city_id: 1,
  description: "We are a brewery and taproom located in downtown Cambridge. Our focus is on aroma-packed and flavor-driven beers, with an emphasis on New England IPAs, barrel-aged sours, and special seasonals. We brew a variety of one-off batches that allow us to pursue our various whims, and we don’t shy away from funk, twists on tradition, and unique ingredients."
});

Guide.create({
  title: "Best Craft Beer Bars in Cambridge",
  body: "In the farm-to-table food industry today, it only makes sense that beer lovers are gravitating towards smaller, local brewers. Craft beer has exploded to the point where some are even questioning if there are too many brewers in the United States. For now, craft beer lovers can rejoice in Cambridge where there’s plenty of options from both near and far.",
  city_id: 1
})

BreweryGuide.create({brewery_id: 1, guide_id: 1})
BreweryGuide.create({brewery_id: 3, guide_id: 1})

Favorite.create({user_id: 1, brewery_id: 1})
Favorite.create({user_id: 1, brewery_id: 2})
Favorite.create({user_id: 1, brewery_id: 3})