json.set! @favorite.id do
  json.breweryName Brewery.find(@favorite.brewery_id).name
end