class BooksController < ApplicationController
  before_action :authorized, only: [:index]

  def index
    @books = current_user.books
  end

  def show
    @book = Book.find(params[:id])
  end
end
