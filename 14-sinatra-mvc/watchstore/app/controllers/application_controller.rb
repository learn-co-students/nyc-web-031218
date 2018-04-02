require './config/environment'

class ApplicationController < Sinatra::Base

  configure do
    set :public_folder, 'public'
    set :views, 'app/views'
  end

  get "/" do
    "WELCOME HOME"
  end

  get "/404" do
    "404 YA DONE GOOFED"
  end

end
