class TravelersController < ApplicationController
  before_action :get_traveler, only: [:show, :edit, :update, :destroy]

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
  end

  def destroy
  end


  private
  def get_traveler
    @traveler = Traveler.find(params[:id])
  end

  def traveler_params
    params.require(:traveler).permit(:name)
  end
end
