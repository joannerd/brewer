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