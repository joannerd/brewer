class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render '/api/users/index'
  end

  def new
    @user = User.new
  end


  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render '/api/users/show'
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
