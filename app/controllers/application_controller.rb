class ApplicationController < ActionController::API
  
  before_action :authorize

  include ActionController::Cookies
  
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

  def current_user
    @current_user ||= User.find_by(session[:user_id]) #memoization
  end

  private

  def authorize 
    render json: {error: "Not authorized"}, status: :unauthorized unless current_user
  end

  def render_not_found
    render json: {error: "Not found"}, status: :render_not_found
  end

  def render_unprocessable_entity(invalid)
    render json: {error: invalid.record.errors}, status: :unprocessable_entity 
  end

end
