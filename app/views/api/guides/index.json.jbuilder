json.guides do
  @guides.each do |guide|
    json.partial! 'api/guides/guide', guide: guide
  end
end

json.breweries do
  @guides.each do |guide|
    guide.breweries.each do |brewery|
      json.set! brewery.id do
        json.extract! brewery, :id, :name, :lat, :lng, :address, :website, :description
        json.cityId brewery.city_id
        json.photoUrl url_for(brewery.photo) if brewery.photo.attached?
      end
    end
  end 
end