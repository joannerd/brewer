json.extract! brewery, :id, :name, :lat, :lng, :address, :website, :description
json.cityId brewery.city_id
json.cityName brewery.city.name
json.stateName brewery.city.state.split(" ").map{|el| el[0]}.join("")
json.photoUrl url_for(brewery.photo) if brewery.photo.attached?