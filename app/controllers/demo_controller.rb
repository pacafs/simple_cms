class DemoController < ApplicationController
    
  #layout false

  def index	
    
    # render(:template => 'demo/hello')
    # render('demo/hello')
  	# render('hello')
    
    @route = Route.all.first

    respond_to do |format|
      format.html { render html: @route }
      format.xml  { render xml: @route }
      format.json { render json: @route }
    end

  end

  def index_json
    @route = Route.all.first
    render json: @route
  end

  
  def hello
    
  	@array = [1,2,3,4,5]
  	@id = params['id']
  	@page = params[:page]

  end

  def other_page
  	
    #redirect_to(:controller => 'demo', :action => 'index')

  end

  def google
  	redirect_to("http://www.google.com")
  end

  def contact

    # You could search with more ease -> Route.first.star_lat ...
    # @start_lat = Route.find(User.first.user_routes.first.route_id).start_lat
    # @end_lat = Route.find(User.first.user_routes.first.route_id).end_lat
    # @start_lang = Route.find(User.first.user_routes.first.route_id).start_lang
    # @end_lang = Route.find(User.first.user_routes.first.route_id).end_lang
    
    @start_lat = Route.find(1).start_lat
    @end_lat = Route.find(1).end_lat
    @start_lang = Route.find(1).start_lang
    @end_lang = Route.find(1).end_lang

    @route = Route.all.first

    @markers = Marker.all
    
    respond_to do |format|
      format.html {render html: @route, :layout => false }
      format.xml  {render xml:  @route }
      format.json {render json: @route }
    end

  end

  def text_helpers
  end

end