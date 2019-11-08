json.set! @city.id do
  json.partial! 'api/cities/city', city: @city
end