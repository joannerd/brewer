class Api::BreweriesController < ApplicationController
  def index
    @breweries = Brewery.all.order(:city_id)
    render '/api/breweries/index'
  end

  def show
    @brewery = Brewery.find(params[:id])
    render '/api/breweries/show'
  end
end
