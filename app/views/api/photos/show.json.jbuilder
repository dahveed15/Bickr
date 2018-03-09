json.partial! "api/photos/photo", photo: @photo
json.extract! @user, :username

json.set! :comments do
  @comments.each do |comment|
    json.set! comment.id do
      json.extract! comment, :body, :user_id
    end
  end
end
