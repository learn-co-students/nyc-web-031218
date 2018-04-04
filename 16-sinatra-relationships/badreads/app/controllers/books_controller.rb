class BooksController < ApplicationController

  get "/books" do
    @books = Book.all
    erb :"books/index"
  end

  get "/books/new" do
    # this is for the form to show a new book
    @authors = Author.all
    erb :"books/new"
  end

  get "/books/:id" do
    @book = Book.find(params[:id])
    erb :"books/show"
  end

  # THIS CONTROLLER WILL NEVER BE CALLED :(
  # get "/books/:title" do
  #   @book = Book.find_by(title: params[:title])
  #   erb :"books/show"
  # end

  post "/books" do
    # this is there the book is created
    @book = Book.new(params[:book])

    # the following is if you want to use a nested form, otherwise the author_id
    # is stored in params[:book][:author_id]
    # @author = Author.find_or_create_by(params[:author])
    #
    # @book.author_id = @author.id

    @book.save
    redirect "/books/#{@book.id}"
  end

  get "/books/:id/edit" do
    @book = Book.find(params[:id])
    @authors = Author.all
    erb :"books/edit"
  end

  patch "/books/:id" do
    @book = Book.find(params[:id])
    @book.update(params[:book])
    redirect "/books/#{@book.id}"
  end

  delete "/books/:id" do
    Book.destroy(params[:id])
    redirect "/books"
  end
end
