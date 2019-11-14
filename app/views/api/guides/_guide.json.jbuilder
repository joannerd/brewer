json.set! guide.id do
  json.extract! guide, :id, :title, :body
  json.author guide.user.username
  json.breweryIds guide.breweries.order(:order).pluck(:id)
  json.cityPhotoUrl url_for(guide.city.photo)
  json.cityLat guide.city.lat
  json.cityLng guide.city.lng
  json.userId guide.user_id
end