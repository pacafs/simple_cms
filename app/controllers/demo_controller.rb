class DemoController < ApplicationController
    
  #layout false
  

  def index	
    
    # render(:template => 'demo/hello')
    # render('demo/hello')
  	# render('hello')
    
    @subject = Subject.all
    
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
  end

  def text_helpers
  end


end