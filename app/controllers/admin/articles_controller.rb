class Admin::ArticlesController < ApplicationController
  before_action :authenticate_user!

  def index
    @pagy, @articles = pagy(Article.all)
  end

  def show; end

  def create; end

  def update; end

  def destroy; end
end
