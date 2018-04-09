Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  # resources gives you index, show, new, create, edit, update, and destroy
  # get "/rishi", to: "controller#rishi", as: "rishi", gives you a path helper called rishi_path
  resources :smoothies
end
