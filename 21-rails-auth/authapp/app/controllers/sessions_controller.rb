class SessionsController < ApplicationController

  def new
  end

  def create
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      # WE ARE HAPPY AND AUTHENTICATED
      session[:user_id] = user.id
      redirect_to user
    else
      flash[:errors] = "Username/Password combination invalid"
      redirect_to login_path
    end
  end

  def logout
    session.delete(:user_id)
    # session[:user_id] = nil
    redirect_to login_path
  end
end
