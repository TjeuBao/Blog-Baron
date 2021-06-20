class Admin::CategoriesController < ApplicationController
  before_action :authenticate_user!

  def index
    @categories = Category.all
  end

  def show; end

  def create; end

  def update; end

  def destroy; end
end
