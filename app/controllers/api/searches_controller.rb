class Api::SearchesController < ApplicationController

  def index
    @businesses = Business.where('name ILIKE :name', name: "%#{params[:query]}%").limit(5)
    # @business_types = BusinessType.where('name ILIKE :name', name: "%#{params[:query]}%").limit(2)
  end
end
