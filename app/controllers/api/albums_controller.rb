class Api::AlbumsController < ApplicationController

  before_action :require_logged_in

  def index
    @albums = Album.all
  end

  def show
    @album = Album.find(params[:id])
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

  def destroy
    @album = Album.find(params[:id])
    @album.destroy

    render :show
  end

  private

  def album_params
    params.require(:album).permit(:name)
  end

end
