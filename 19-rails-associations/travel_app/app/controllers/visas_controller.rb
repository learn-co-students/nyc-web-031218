class VisasController < ApplicationController
  before_action :get_visa, only: [:show, :edit, :update, :destroy]
  before_action :get_travelers, only: [:new, :edit]

  def index
    @visas = Visa.all
  end

  def show
  end

  def new
    @visa = Visa.new
  end

  def create
    @visa = Visa.create(visa_params)
    if @visa.valid?
      redirect_to @visa
    else
      flash[:errors] = @visa.errors.full_messages
      redirect_to new_visa_path
    end
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private
  def get_visa
    @visa = Visa.find(params[:id])
  end

  def get_travelers
    @travelers = Traveler.all
  end

  def visa_params
    params.require(:visa).permit(:country, :traveler_id)
  end

end
