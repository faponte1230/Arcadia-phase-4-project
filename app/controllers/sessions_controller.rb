class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create,:destroy]

    def create #login
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :ok
        else
            render json: {error: "Invalid username or password"}, status: :unauthorized
        end
    end

    def destroy #logout
        session.delete :user_id
    end

end
