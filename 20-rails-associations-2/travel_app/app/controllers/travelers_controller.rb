class TravelersController < ApplicationController
  before_action :get_traveler, only: [:show, :edit, :update, :destroy]
  before_action :get_cities, only: [:new, :edit]

  def index
    @travelers = Traveler.all
  end

  def show
  end

  def new
    @traveler = Traveler.new
  end

  def create
    @traveler = Traveler.create(traveler_params)
    if @traveler.valid?
      redirect_to @traveler
    else
      flash[:errors] = @traveler.errors.full_messages
      redirect_to new_traveler_path
    end
  end

  def edit
  end

  def update
    @traveler.update(traveler_params)
    if @traveler.valid?   # if @traveler.update(traveler_params)
      redirect_to @traveler
    else
      flash[:errors] = @traveler.errors.full_messages
      redirect_to edit_traveler_path(@traveler)
    end
  end

  def destroy
    Traveler.destroy(params[:id])
    redirect_to travelers_path
  end


  private
  def get_traveler
    @traveler = Traveler.find(params[:id])
  end

  def get_cities
    @cities = City.all
  end

  def traveler_params
    params.require(:traveler).permit(:name, city_ids: [])
  end
end
