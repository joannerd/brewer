class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
    @user = User.find(params[:id])
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors.full_messages
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      render json: ['You have deleted your account']
    else
      render json: @user.errors.full_messages
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email)
  end
end
