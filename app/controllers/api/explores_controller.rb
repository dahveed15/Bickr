class Api::ExploresController < ApplicationController
  def index
    @photos = Photo.all
  end
end
