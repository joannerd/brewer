Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :breweries, only: [:index, :show]
    resources :cities, only: [:index, :show]
    resources :guides, except: [:edit]
    resources :brewery_guides, only: [:create, :update, :destroy]
    resources :favorites, only: [:create, :destroy]
    resources :posts, except: [:new, :edit] do
      resources :comments, only: [:new]
    end
    resources :comments, except: [:new, :edit, :show, :index]
  end
end
