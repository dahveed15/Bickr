class Api::PhotosController < ApplicationController

  before_action :require_logged_in

  def index
    #only give me the photos of one album belonging to a user
    @photos = current_user.album_photos.where({album_id: params[:album_id]})
  end

  def show
    #only be able to see an album photo by a current user
    @photo = Photo.find_by(id: params[:id])
    @user = User.find_by(id: @photo.user_id)
    @comments = @photo.comments
    # @user_names = {}
    # @comments.each do |comment|
    #   username = User.find_by(id: comment.user_id).username
    #   @user_names[comment.id] = username
    # end
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.user_id = current_user.id
    @user = User.find_by(id: @photo.user_id)

    #fixes multiple users being able to have the same album id
    @photo.album_id = params[:album_id] if current_user.albums.find_by(id: params[:album_id])

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = current_user.album_photos.find_by(id: params[:id])
    if @photo.update_attributes(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = current_user.album_photos.find_by(id: params[:id])
    @user = User.find_by(id: @photo.user_id)
    @photo.destroy

    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:img_url)
  end

end
