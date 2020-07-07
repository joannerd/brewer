json.users do
  json.partial! 'api/users/user', user: @user
end

json.guides do
  @user.guides.each do |guide|
    json.partial! 'api/guides/guide', guide: guide
  end
end

json.favorites do
  @user.favorite_breweries.each do |brewery|
    json.set! brewery.id do
      json.extract! brewery, :id, :name
    end
  end
end