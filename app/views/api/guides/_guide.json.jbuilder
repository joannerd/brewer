json.set! guide.id do
  json.extract! guide, :id, :title, :body
  json.author guide.user.username
  json.brewInfo do
    guide.breweries.each { |brewery| json.set! brewery.id, [brewery.lng, brewery.lat] }
  end
  

  json.cityPhotoUrl url_for(guide.city.photo)
  json.cityLat guide.city.lat
  json.cityLng guide.city.lng
  json.userId guide.user_id
end