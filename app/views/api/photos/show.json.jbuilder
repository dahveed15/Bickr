json.partial! "api/photos/photo", photo: @photo
json.extract! @user, :username
