class Api::CommentsController < ApplicationController

  before_action :require_logged_in


  def show

  end

  def create
    @comment = Comment.new(comment_params)
    @comment.user_id = current_user.id
    @photo = Photo.find_by(:id, params[:id])


    @comment.photo_id = @photo.id
    #get the username of the user who posted the comment
    @comment.comment_user = current_user.username

    @user = User.find_by(id: @comment.user_id)

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = current_user.comments.find_by(id: params[:id])
    if @comment.update_attributes(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
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
