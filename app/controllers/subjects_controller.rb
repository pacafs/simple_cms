class SubjectsController < ApplicationController

  layout false

  def index
   @subjects  = Subject.sorted
  end

  def new
    @subject = Subject.new
  end

  def show
  	@subject = Subject.find(params[:id])
  end

  def edit
  end

end