class ArcadesController < ApplicationController
  skip_before_action :authorize, only: [:index, :show]

  def index
    arcades = Arcade.all  
    render json: arcades
  end

  def create
    arcade = Arcade.create!(arcade_params)
    render json: arcade, status: :created
  end

  def show
    arcade = Arcade.find_by(id: params[:id])
    render json: arcade, status: :ok
  end

  private

  def arcade_params
    params.permit(:name, :num_of_games, :img_url)
  end

end
