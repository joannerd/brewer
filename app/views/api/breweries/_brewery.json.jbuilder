json.set! @brewery.id do
  json.extract! brewery, :id, :city_id, :name, :lat, :lng, :address, :website, :description
  json.order brewery.brewery_guides.order if brewery.brewery_guides.order
end