@breweries.each do |brewery|
  json.partial! 'api/breweries/brewery', brewery: brewery
end