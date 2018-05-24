class UsersController < ApplicationController



  def create
    @user = User.new

    @user.username = params[:username]
    @user.password = params[:password]

    if (@user.save)
      render json: token_json(@user)
    else
      render json: {
        errors: @user.errors.full_messages
      }, status: :unprocessable_entity
    end
  end

  def users_snacks
    @user = User.find_by(id: params[:user_id])

    if (authorized?(@user))
      render json: @user.snacks
    else
      render json: { go_away: true }, status: :unauthorized
    end

  end

end
