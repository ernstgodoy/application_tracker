Rails.application.routes.draw do
  resources :jobs
  get "/application_count", to: "application_count#index"
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: 'main#index', constraints: ->(request){ request.format.html? }
  root to: "main#index"
end
