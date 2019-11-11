@cities.each do |city|
  json.partial! 'api/cities/city', city: city
end