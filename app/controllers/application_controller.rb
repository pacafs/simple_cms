class ApplicationController < ActionController::Base
  http_basic_authenticate_with name: "paca", password: "digitaria"
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  
  def confirmed_logged_in

  	unless session[:user_id]
  		flash[:notice] = "Please Log In"
  		redirect_to(:controller => "access", :action => "login")
  		return false # needs to return false to stop before_action
  	else
  		return true
  	end
  end

end

