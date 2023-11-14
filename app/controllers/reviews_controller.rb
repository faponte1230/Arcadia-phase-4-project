class ReviewsController < ApplicationController

    def index
        reviews = Review.all 
        render json: reviews, status: :ok
    end

    def show
        review = find_user_review
        render json: review
    end

    def create
        review = @current_user.reviews.create(review_params)
        if review.valid?
        render json: review, status: :created
        else
            render json: { error: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def update
        review = find_user_review
        review.update(review_params)
        if review.valid?
        render json: review
        else
            render json: { error: review.errors.full_messages}, status: :unprocessable_entity
        end
    end

    def destroy
        review = find_user_review
        review.destroy
        head :no_content
    end

    private
    
    def find_user_review
        @current_user.reviews.find(params[:id])
    end
    
    def review_params
        params.permit(:body, :arcade_id)
    end
end
