# frozen_string_literal: true

Rails.application.routes.draw do
  mount Ckeditor::Engine => '/ckeditor'
  devise_for :users

  root 'home#index'

  resource :home, only: :index do
    collection do
      get :product
      get :category
      get :article
      get :search
    end
  end

  resources :posts
  resources :categories
  resources :likes
  resources :comments
  resources :articles
  resources :notifications
end
