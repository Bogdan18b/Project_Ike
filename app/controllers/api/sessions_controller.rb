class Api::SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      render json: ["The email address or password you entered is incorrect"], status: 422
    end
  end

  def destroy
    logout
    render json: {}
  end

end
