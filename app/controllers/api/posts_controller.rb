class Api::PostsController < ApplicationController
  def index
    @posts = Post.all
    render '/api/posts/index'
  end

  def show
    @post = Post.find(params[:id])
    render '/api/posts/show'
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render '/api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    if @post.destroy
      @posts = Post.all
      render '/api/posts/index'
    else
      render json: ['Post not found.'], status: 404
    end
  end

  private

  def post_params
    params.require(:post).permit(:title, :body, :user_id)
  end
end
