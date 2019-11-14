json.guides do
  json.set! @guide.id do
    json.extract! @guide, :id, :title, :body
    json.author @guide.user.username
    json.breweryIds @guide.breweries.order(:order).pluck(:id)
    json.breweryLocations @guide.breweries.order(:order).pluck(:lng, :lat)

    json.cityPhotoUrl url_for(@guide.city.photo)
    json.cityLng @guide.city.lng
    json.cityLat @guide.city.lat
    json.userId @guide.user_id
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