json.posts do 
  json.partial! 'api/posts/post', post: @post
end

json.comments do
  @post.comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :id, :body
      json.postId comment.post_id
      json.author User.find(comment.user_id).username
      json.timestamp comment.created_at
    end
  end
end