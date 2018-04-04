class UsersController < ApplicationController

  get "/users" do
    @users = User.all
    erb :"users/index"
  end

  get "/users/new" do
    @books = Book.all
    erb :"users/new"
  end

  post "/users" do
    @user = User.new(params[:user])

    # if no boxes are checked, params[:book_ids] will be nil :(
    if params[:book_ids]
      @user.book_ids = params[:book_ids]
    end

    @user.save

    redirect "/users/#{ @user.id }"
  end

  get "/users/:id" do
    @user = User.find(params[:id])
    erb :"users/show"
  end

  get "/users/:id/edit" do
    @user = User.find(params[:id])
    @books = Book.all
    erb :"users/edit"
  end

  patch "/users/:id" do
    @user = User.find(params[:id])

    if params[:book_ids]
      @user.book_ids = params[:book_ids]
    end

    @user.username = params[:user][:username]

    @user.save
    redirect "/users/#{ @user.id }"
  end

  delete "/users/:id" do
    User.delete(params[:id])
    redirect "/users"
  end
end
