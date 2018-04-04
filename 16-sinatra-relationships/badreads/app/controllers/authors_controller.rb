class AuthorsController < ApplicationController

  # read all authors
  get "/authors" do
    @authors = Author.all
    erb :"authors/index"
  end

  #create new author

  get "/authors/new" do
    erb :"authors/new"
  end

  # read one author
  get "/authors/:id" do
    @author = Author.find(params[:id])
    erb :"authors/show"
  end



  post "/authors" do
    @author = Author.create(params[:a])
    # this becomes "/authors/3" or whatever
    redirect "/authors/#{@author.id}"
  end

  #update

  get "/authors/:id/edit" do
    @author = Author.find(params[:id])
    erb :"authors/edit"
  end

  patch "/authors/:id" do
    @author = Author.find(params[:id])
    @author.update(params[:a])

    redirect "/authors/#{@author.id}"
  end

  #delete

  delete "/authors/:id" do
    @author = Author.find(params[:id])
    @author.destroy

    redirect "/authors"
  end

end
