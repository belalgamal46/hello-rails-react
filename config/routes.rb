Rails.application.routes.draw do
  root "root#index"
  namespace :api do
    get '/random_greeting', to: 'greeting_message#index'
  end
end
