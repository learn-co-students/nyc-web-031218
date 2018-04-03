class BooksController < ApplicationController

  get "/books" do
    @books = Book.all
    erb :"books/index"
  end

  get "/books/new" do
    # this is for the form to show a new book
    erb :"books/new"
  end

  get "/books/:id" do
    @book = Book.find(params[:id])
    erb :"books/show"
  end

  post "/books" do
    # this is there the book is created
    @book = Book.create(params[:book])
    redirect "/books/#{@book.id}"
  end

  get "/books/:id/edit" do
    @book = Book.find(params[:id])
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
