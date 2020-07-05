class Api::GuidesController < ApplicationController
  def index
    @guides = Guide.all
    render '/api/guides/index'
  end

  def show
    @guide = Guide.find(params[:id])
    render '/api/guides/show'
  end

  def new
    @breweries = Brewery.all.order(:city_id)
    @cities = City.all
    render '/api/guides/new'
  end

  def create
    @guide = Guide.new(guide_params)
    errors = []
    if !params[:guide][:breweries]
      errors.push('Guide must have at least one brewery')
      render json: errors, status: 422
    else
      if @guide.save
        params[:guide][:breweries].each do | order, brewery_id |
          BreweryGuide.create({brewery_id: brewery_id.to_i, guide_id: @guide.id, order: order})
        end
        render '/api/guides/show'
      else
        render json: @guide.errors.full_messages, status: 422
      end
    end
  end

  def update
    @guide = Guide.find(params[:id])
    if @guide.update(guide_params)
      render '/api/guides/show'
    else
      render json: @guide.errors.full_messages, status: 422
    end
  end

  def destroy
    @guide = Guide.find(params[:id])
    if @guide.destroy
      render '/api/guides/show'
    else
      render json: ['Guide not found.'], status: 404
    end
  end


  private

  def guide_params
    params.require(:guide).permit(:title, :body, :city_id, :user_id)
  end
end
