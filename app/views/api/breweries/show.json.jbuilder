json.set! brewery.id do
  json.partial! 'api/breweries/brewery', brewery: @brewery
end