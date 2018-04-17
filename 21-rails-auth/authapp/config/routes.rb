Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :books, only: [:index, :show]

  resources :users, only: [:index, :show, :create]

  get "signup", to: "users#new", as: "signup"
  get "login", to: "sessions#new", as: "login"
  post "login", to: "sessions#create", as: "sessions"

  post "logout", to: "sessions#logout", as: "logout"
end
