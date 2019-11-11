class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user.nil?
      render json: ['User not found'], status: 404
    else
      login(@user)
      render '/api/users/show'
    end
  end

  def destroy
    if current_user
      logout
    else
      render json: ['There is no user logged in.'], status: 404
    end
  end
end
