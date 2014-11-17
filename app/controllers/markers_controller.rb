class MarkersController < ApplicationController
	
	def new
      @marker = Marker.new
  	end

	def create
   
   	 @marker = Marker.new(marker_params)

	    if @marker.save

	      respond_to do |format|
	        format.html { redirect_to(:action => 'new') }
	        format.json { render :json => @marker }
	      end

	      flash[:notice] = "Marker CREATED"
	      #redirect_to(:action => 'index')
	    else
	      render('new')
	      flash[:notice] = "ERROR"
	    end

	end

	def update
	end

	private

  def marker_params
    params.require(:marker).permit(:name, :description, :lat, :lang, :marker_image, :content)
  end


end
