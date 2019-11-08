class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
    render '/api/cities/index'
  end

  def show
    @city = City.find(params[:id])
    @guides = @city.guides
    @breweries = @city.breweries
    render '/api/cities/show'
  end
end
