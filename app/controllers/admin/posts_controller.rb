class Admin::PostsController < ApplicationController
  before_action :authenticate_user!

  def index
    @pagy, @posts = pagy(Post.all)
  end

  def show; end

  def create; end

  def update; end

  def destroy; end
end
