json.posts do
  json.partial! 'api/post/post', post: @post
end