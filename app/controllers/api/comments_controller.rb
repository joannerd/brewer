class Api::CommentsController < ApplicationController
  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      @post = Post.find(@comment.post_id)
      render '/api/posts/show'
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.destroy
      @post = Post.find(@comment.post_id)
      render '/api/posts/show'
    else
      render json: ['Comment not found.'], status: 404
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :post_id)
  end
end