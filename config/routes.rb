# frozen_string_literal: true

Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users

  root 'home#index'

  resource :home, only: :index do
    collection do
      get :posts
      get :categories
      get :articles
      get :search
    end
  end

  namespace :admin, path: '/' do
    resources :admin
    resources :posts
    resources :categories
    resources :articles
  end


  resources :likes
  resources :comments
  resources :notifications
end
