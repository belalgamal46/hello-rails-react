Rails.application.routes.draw do
  root "root#index"
  namespace :api do
    get '/random_greeting', to: 'greeting_message#index'
  end
  get '*path', to: 'root#index'
end
