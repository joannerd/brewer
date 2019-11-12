json.set! guide.id do
  json.extract! guide, :id, :title, :body
  json.cityPhotoUrl url_for(guide.city.photo)
  json.breweries do
    json.array! guide.breweries.order(:order)
  end
  json.author guide.user.username
end