@guides.each do |guide|
  json.partial! 'api/guides/guide', guide: guide
end