class CitiesController < ApplicationController
  before_action :get_city, only: [:show, :edit, :update, :destroy]

  def index
    @cities = City.all
  end

  def show
  end

  def new
    @city = City.new
  end

  def create
    @city = City.create(city_params)
    if @city.valid?
      redirect_to @city
    else
      flash[:errors] = @city.errors.full_messages
      redirect_to new_city_path
    end
  end

  def edit
  end

  def update
    @city.update(city_params)
    if @city.valid?
      redirect_to @city
    else
      flash[:errors] = @city.errors.full_messages
      redirect_to edit_city_path(@city)
    end
  end

  def destroy
    City.destroy(params[:id])
    redirect_to cities_path
  end


  private
  def get_city
    @city = City.find(params[:id])
  end

  def city_params
    params.require(:city).permit(:name)
  end
end
