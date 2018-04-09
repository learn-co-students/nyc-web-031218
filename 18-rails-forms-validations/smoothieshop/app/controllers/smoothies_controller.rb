class SmoothiesController < ApplicationController

  def index
    @smoothies = Smoothie.all
  end

  def show
    @smoothie = Smoothie.find(params[:id])
  end

  def new
    @smoothie = Smoothie.new
  end

  def create
    # @smoothie = Smoothie.new(smoothie_params)
    # if @smoothie.valid?
    #   @smoothie.save
    #   redirect_to @smoothie
    # else
    #   flash[:errors] = @smoothie.errors.full_messages
    #   redirect_to new_smoothy_path
    # end

    @smoothie = Smoothie.create(smoothie_params)

    if @smoothie.valid?
      # redirect_to smoothy_path(@smoothie)
      redirect_to @smoothie # don't have to do redirect_to "/smoothies#{@smoothie.id}" anymore
    else
      flash[:errors] = @smoothie.errors.full_messages
      redirect_to new_smoothy_path
    end
  end

  def edit
    @smoothie = Smoothie.find(params[:id])
  end

  def update
    @smoothie = Smoothie.find(params[:id])
    @smoothie.update(smoothie_params)

    if @smoothie.valid?
      redirect_to @smoothie
    else
      flash[:errors] = @smoothie.errors.full_messages
      redirect_to edit_smoothy_path(@smoothie)
    end
  end

  def destroy
    Smoothie.destroy(params[:id])
    redirect_to smoothies_path
  end


  private

  def smoothie_params
    params.require(:smoothie).permit(:name, :price)
  end

end
