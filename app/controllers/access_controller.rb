class AccessController < ApplicationController

  before_action :confirmed_logged_in, :except => [:login, :attempt_login, :logout]
  skip_before_filter :verify_authenticity_token

  def index
  end

  def login
  end

  def attempt_login
  
  	if params[:username].present? && params[:password].present?
  		
      found_user = User.where(:username => params[:username]).first
  		
      if found_user
  			authorized_user = found_user.authenticate(params[:password])
  		end
  	
    end
  	
  	if authorized_user

  		session[:user_id]  =  authorized_user.id
  		session[:username] =  authorized_user.username

      #flash[:notice] = "Logged In!"

      respond_to do |format|
        format.html { redirect_to :action => "index" }
        format.json { render :json => { :user_id => session[:user_id], :username => session[:username] } }
      end
  	
    else

  		#flash[:notice] = "No params were found!"

      respond_to do |format|
        format.html { redirect_to :action => "login" }
        format.json { render :json => { :user_id => session[:user_id], :username => session[:username] } }
      end

  	end

  end

  def logout
  	session[:user_id] = nil
  	session[:username] = nil
  	flash[:notice] = "Logged Out!"
  	redirect_to(:controller => "demo", :action => "index")
  end


end