class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all.includes(:user).includes(:business)
  end

  def create
    debugger
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    @review.business_id = params[:business_id]
    if @review.save
      render "api/businesses/#{@review.business_id}"
    else
      render json: @review.errors.full_messages, status: 422
    end

  end

  def update
    @review = current_user.reviews.find(params[:id])
    if @review.update(review_params)
      render "api/businesses/#{@review.business_id}"
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
    params.require(:review).permit(:body, :rating)
  end
end
