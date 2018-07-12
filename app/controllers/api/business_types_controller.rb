class Api::BusinessTypesController < ApplicationController
  def index
    @business_types = BusinessType.all 
  end
end
