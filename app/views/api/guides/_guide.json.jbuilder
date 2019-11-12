json.set! guide.id do
  json.extract! guide, :id, :title, :body
  json.city guide.city
  json.breweries guide.breweries
end