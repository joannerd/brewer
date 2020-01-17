Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :breweries, only: [:index, :show]
    resources :cities, only: [:index, :show]
    resources :guides, except: [:new, :edit]
    resources :posts, except: [:new, :edit] do
      resources :comments, except: [:new, :edit]
    end
  end
end
