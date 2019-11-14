json.guides do
  json.partial! 'api/guides/guide', guide: @guide

  json.breweryLocations do
    @guide.breweries.each do |brewery|
      json.set! brewery.id do
        json.array! [brewery.lng, brewery.lat]
      end
    end
  end
end 

json.breweries do
  @guide.breweries.each do |brewery|
    json.set! brewery.id do
      json.extract! brewery, :id, :name, :lat, :lng, :address, :website, :description
      json.cityId brewery.city_id
      json.photoUrl url_for(brewery.photo) if brewery.photo.attached?
    end
  end 
end