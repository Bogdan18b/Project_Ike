Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :reviews, only: [:update, :edit, :destroy, :index]
    resources :business_types, only: [:index]
    resources :businesses, only: [:show, :index] do
      resources :reviews, only: [:new, :create]
    end
  end
end
