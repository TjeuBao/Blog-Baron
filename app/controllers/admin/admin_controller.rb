class Admin::AdminController < ApplicationController
  before_action :authenticate_user!

  def index; end

  def search; end
end
