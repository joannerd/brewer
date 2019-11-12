json.extract! brewery, :id, :name, :lat, :lng, :address, :website, :description
json.cityId brewery.city_id
json.photoUrl url_for(brewery.photo) if brewery.photo.attached?