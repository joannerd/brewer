class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
    render '/api/cities/index'
  end

  def show
    @city = City.with_attached_photos.find(params[:id])
    render '/api/cities/show'
  end
end
