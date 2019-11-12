class Api::GuidesController < ApplicationController
  def index
    @guides = Guide.all
    render '/api/guides/index'
  end

  def show
    @guide = Guide.find(params[:id])
    @breweries = Brewery.where
    render '/api/guides/show'
  end

  def new
    @guide = Guide.new
  end

  def create
    @guide = Guide.new(guide_params)
    if @guide.save
      render '/api/guides/guides'
    else
      render json: @guide.errors.full_messages, status: 422
    end
  end

  def update
    @guide = Guide.find(params[:id])
    if @guide.update(guide_params)
      render '/api/guides/guides'
    else
      render json: @guide.errors.full_messages, status: 422
    end
  end

  def destroy
    @guide = Guide.find(params[:id])
    if @guide.destroy
      render '/api/guides/guides'
    else
      render json: ['Guide not found.'], status: 404
    end
  end


  private

  def guide_params
    params.require(:guide).permit(:title, :body, :city_id)
  end
end
