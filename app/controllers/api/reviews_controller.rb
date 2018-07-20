class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all.includes(:user).includes(:business).limit(9)
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    @review.business_id = params[:business_id]
    if @review.save
      render json: ["it's working"]
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :business_id)
  end
end
