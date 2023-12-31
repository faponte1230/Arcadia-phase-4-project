Rails.application.routes.draw do
  
  #Routes for Arcade & Review
  resources :arcades, only: [:index, :create, :show]
  resources :reviews, only: [:index, :create, :show, :update, :destroy]

  #Log in/out routes
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  #Create & Read route for User
  get '/me', to: "users#show"
  post '/signup', to: "users#create"
 
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  #get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
