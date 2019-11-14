json.guides do
  json.partial! 'api/guides/guide', guide: @guide
end 

json.breweries do
  @guide.breweries.each do |brewery|
    json.partial! 'api/breweries/brewery', brewery: brewery
  end 
end