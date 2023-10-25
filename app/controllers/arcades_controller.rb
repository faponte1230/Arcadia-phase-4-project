class ArcadesController < ApplicationController
  before_action :authorize, only: [:index]

  def create
    arcade = Arcade.create!(arcade_params)
    render json: arcade, status: :created
  end

  def index
    arcades = Arcade.all 
    render json: arcades, status: :ok
  end

  def show
    arcade = Arcade.find(params[:id])
    render json: arcade, status: :ok
  end

  private

  def arcade_params
    params.permit(:name, :num_of_games, :img_url)
  end

end
