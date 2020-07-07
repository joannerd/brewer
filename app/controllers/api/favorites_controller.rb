class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new(favorite_params)
    if @favorite.save
      render '/api/favorites/show'
    else
      render json: @favorite.errors.full_messages, status: 422
    end
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    if @favorite.destroy
      render '/api/favorites/show'
    else
      render json: ['Favorite not found.'], status: 404
    end
  end


  private

  def favorite_params
    params.require(:favorite).permit(:brewery_id, :user_id)
  end
end
