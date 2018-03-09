class Api::CommentsController < ApplicationController

  before_action :require_logged_in


  def show

  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @photo = Photo.find_by(:id, params[:id])

    #may need to fix this line
    @comment.photo_id = @photo.id

    @user = User.find_by(id: @comment.user_id)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update

  end

  def destroy
    @comment = current_user.comments.find_by(id: params[:id])
    @comment.destroy

    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body)
  end

end
