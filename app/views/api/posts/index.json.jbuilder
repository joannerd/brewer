json.posts do
  @posts.each do |post|
    json.partial! 'api/post/post', post: post
  end
end