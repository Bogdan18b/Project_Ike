class Api::ReviewsController < ApplicationController

  def index
    @reviews = Review.all.limit(12).order(created_at: :desc)
  end

  def show
    @review = Review.find(params[:id])
  end

  def create
    @review = Review.new(review_params)
    @review.user_id = current_user.id
    @review.business_id = params[:business_id]
    if @review.save
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end

    def edit
    end

    def update
    end

  end

  def destroy
    @review = Review.find(params[:id])
    @review.destroy
    render :destroy
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :business_id)
  end
end
