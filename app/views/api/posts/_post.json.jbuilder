json.set! post.id do
  json.extract! post, :id, :title, :body
  json.authorId post.user_id
  json.timestamp post.created_at
end