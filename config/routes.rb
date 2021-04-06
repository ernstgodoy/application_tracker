Rails.application.routes.draw do
  resources :jobs
  get "/roles_count", to: "jobs#roles_count"
  get "/status_metrics", to: "jobs#status_metrics"
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get '*path', to: 'main#index', constraints: ->(request){ request.format.html? }
  root to: "main#index"
end
