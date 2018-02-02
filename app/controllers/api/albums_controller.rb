class Api::AlbumsController < ApplicationController

  before_action :require_logged_in

  def index
    @albums = Album.all
  end

  def show
    @album = Album.find_by(id: params[:id])
  end

  def create
    @album = Album.new(album_params)

    @album.user_id = current_user.id

    if @album.save
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def update
    @album = current_user.albums.find_by(id: params[:id])
    if @album.update_attributes(album_params)
      render :show
    else
      render json: @album.errors.full_messages, status: 422
    end
  end

  def destroy
    @album = current_user.albums.find_by(id: params[:id])
    @album.destroy

    render :show
  end

  private

  def album_params
    params.require(:album).permit(:name)
  end

end
