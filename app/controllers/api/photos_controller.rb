class Api::PhotosController < ApplicationController

  before_action :require_logged_in

  def index
    @photos = current_user.photos
  end

  def show
    @photo = Photo.find_by(id: params[:id])
  end

  def create
    @photo = Photo.new(photo_params)

    #ryan says I can just put album_id and user_id in photo_params
    #I can somehow get these from the front end
    #apparently I won't have to then add lines 20 and 21 (a bit confused)

    @photo.user_id = current_user.id
    @photo.album_id = params[:album_id]

    # if Album.where(user_id: current_user.id).empty?
    #   render json: 'status 422', status: 422
    # end

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = current_user.photos.find(params[:id])
    if @photo.update_attributes(photo_params)
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = current_user.photos.find_by(id: params[:id])
    @photo.destroy

    render :show
  end

  private

  def photo_params
    params.require(:photo).permit(:img_url)
  end

end
