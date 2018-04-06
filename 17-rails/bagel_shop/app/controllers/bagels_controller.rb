class BagelsController < ApplicationController

  def index
    @bagels = Bagel.all
  end

  def show
    @bagel = Bagel.find(params[:id])
  end

  def henry
    @bagels = Bagel.all.select do |bagel|
      bagel.rating > 7
    end
    render "bagels/index"
  end
end
