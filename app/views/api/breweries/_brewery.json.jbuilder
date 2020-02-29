state_abbr = brewery.city.state.split(" ")
if state_abbr.length == 1
  state_abbr = brewery.city.state[0] + brewery.city.state[1]
else
  state_abbr = state_abbr.map{|el| el[0]}.join("")
end

json.extract! brewery, :id, :name, :lat, :lng, :address, :website, :description
json.cityId brewery.city_id
json.city brewery.city.name
json.state state_abbr
json.photoUrl url_for(brewery.photo) if brewery.photo.attached?