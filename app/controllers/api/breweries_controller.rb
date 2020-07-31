class Api::BreweriesController < ApplicationController
  def index
    @breweries = Brewery.all.order(:city_id)
    render '/api/breweries/index'
  end

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
end
