@comments.each do |comment|
  json.set! comment.id do
    json.extract comment, :body, :comment_user
  end
end
