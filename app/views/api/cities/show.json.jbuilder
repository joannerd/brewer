json.cities do
  json.partial! 'api/cities/city', city: @city
end

json.breweries do
  # return nil unless @city.breweries.length > 0
  @city.breweries.each do |brewery|
    json.partial! 'api/breweries/brewery', brewery: brewery
  end
end

json.guides do
  # return nil unless @city.guides.length > 0
  @city.guides.each do |guide|
    json.partial! 'api/guides/guide', guide: guide
  end
end