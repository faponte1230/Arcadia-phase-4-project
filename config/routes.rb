Rails.application.routes.draw do
  
  get 'users/create'
  get 'users/show'
  get 'arcades/create'
  get 'arcades/index'
  get 'arcades/show'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
