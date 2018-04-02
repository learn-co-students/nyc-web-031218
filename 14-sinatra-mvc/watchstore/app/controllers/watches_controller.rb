class WatchesController < ApplicationController

    get "/watches" do
      @watches = Watch.all
      erb :"watches/index"
    end

    get "/watches/:id" do
      @watch = Watch.find(params[:id])
      erb :"watches/show"
    end

end
