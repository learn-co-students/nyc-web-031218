Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get "/bagels", to: "bagels#index"
  get "/bagels/:id", to: "bagels#show"
  get "/henry", to: "bagels#henry", as: "henry"
end
