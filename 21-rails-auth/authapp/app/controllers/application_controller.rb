class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :logged_in?


  def current_user
    if session[:user_id]
      User.find(session[:user_id])
    else
    end
    # current_user ||= User.find(session[:user_id])
  end

  def logged_in? #always returns a boolean
    !!current_user
    # if current_user is a user instance:
      # !current_user is false
      # !!current_user is true
    # if current_user is nil:
      # !current_user is true
      # !!current_user is false
  end

  def authorized #is this controller action an authorized action?
    redirect_to login_path unless logged_in?
  end
end


# class AuthorizationController < ApplicationController
