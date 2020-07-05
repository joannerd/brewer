json.cities do
  @cities.each do |city|
    json.set! city.id do 
      json.extract! city, :id, :name, :state
    end
  end
end

json.breweries do
  @breweries.each do |brewery|
    json.set! brewery.id do
      json.extract! brewery, :id, :name, :lat, :lng
      json.cityId brewery.city_id
    end
  end
end
