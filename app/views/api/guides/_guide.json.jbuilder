json.set! guide.id do
  json.extract! guide, :title, :body
  json.city guide.city
  json.breweries guide.breweries
end