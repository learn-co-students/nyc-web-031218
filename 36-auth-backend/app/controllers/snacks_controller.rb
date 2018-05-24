 class SnacksController < ApplicationController

  

  def index
    if (valid_token?)
      render json: Snack.all
    else
      render json: { go_away: true }, status: :unauthorized
    end
  end

end
