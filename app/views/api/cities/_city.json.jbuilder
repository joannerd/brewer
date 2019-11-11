json.set! city.id do 
  json.extract! city, :id, :name, :state, :lat, :lng, :description
  json.photoUrl url_for(city.photo)
end