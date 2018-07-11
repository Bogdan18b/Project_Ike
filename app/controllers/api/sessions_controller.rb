class Api::SessionsController < ApplicationController

  def new
  end

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user
      login(@user)
      render "api/users/show"
    else
      flash.now[:errors] = ["The username or password you entered is incorrect"]
      render :new
    end
  end

  def destroy
    logout
    redirect_to api_users_url
  end

end
