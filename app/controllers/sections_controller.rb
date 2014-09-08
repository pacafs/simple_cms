class SectionsController < ApplicationController

  # layout false

  def index
    @sections = Section.all
  end

  def show
    @section = Section.find(params[:id])
  end

  def new
    @section = Section.new
  end

  def create

    @section = Section.new(safeparams)

    if @section.save
      flash[:notice] = "SECTION CREATED"
      redirect_to(:action => "index")
    else
      flash[:notice] = "ERROR"
      render("new")
    end

  end

  def edit
    @section = Section.find(params[:id])
  end

  def update

    @section = Section.find(params[:id])
    @section.update_attributes(safeparams)

    if @section.update_attributes(safeparams)
      flash[:notice] = "SECTION UPDATED"
      redirect_to(:action => "show", :id => @section.id)
    else
      flash[:notice] = "ERROR"
      render("index")
    end

  end

  def delete
    @section = Section.find(params[:id])
  end

  def destroy
    section = Section.find(params[:id]).destroy
    redirect_to(:action => 'index')
    flash[:section] = "SECTION DELETED"
  end

  private

  def safeparams
    params.require(:section).permit(:name, :content_type, :content, :visible)
  end


end