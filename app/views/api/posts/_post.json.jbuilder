json.set! post.id do
  json.extract! post, :id, :title, :body
  json.userId post.user_id
  json.author User.find(post.user_id).username
  json.timestamp post.created_at
end

