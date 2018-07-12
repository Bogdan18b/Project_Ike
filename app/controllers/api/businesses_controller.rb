class Api::BusinessesController < ApplicationController

  def show
    @business = Business.find(params[:id])
  end

  def index
    @businesses = Business.all
  end
end
