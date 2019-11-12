json.set! guide.id do
  json.extract! guide, :id, :title, :body
  json.userId guide.user_id
  json.cityPhotoUrl url_for(guide.city.photo)
  json.breweries do
    json.array! (guide.breweries.order(:order)) do |brewery|
      json.partial! 'api/breweries/brewery', brewery: brewery
    end
  end
  json.author guide.user.username
end