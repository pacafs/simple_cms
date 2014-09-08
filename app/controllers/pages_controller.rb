class PagesController < ApplicationController

  # layout false

  def index
    @pages = Page.visible
  end

  def show
    @page = Page.find(params[:id])
  end

  def new
    @page = Page.new
  end

  def create

    @page = Page.new(safeparams)

    if @page.save
      flash[:notice] = "PAGE CREATED"
      redirect_to(:action => "index")
    else
      flash[:notice] = "ERROR"
      render("new")
    end

  end

  def edit
    @page = Page.find(params[:id])
  end

  def update

    @page = Page.find(params[:id])
    @page.update_attributes(safeparams)

    if @page.update_attributes(safeparams)
      flash[:notice] = "PAGE UPDATED"
      redirect_to(:action => "show", :id => @page.id)
    else
      flash[:notice] = "ERROR"
      render("index")
    end

  end

  def delete
    @page = Page.find(params[:id])
  end

  def destroy
    page = Page.find(params[:id]).destroy
    redirect_to(:action => 'index')
    flash[:notice] = "PAGE DELETED"
  end

  private

  def safeparams
    params.require(:page).permit(:name, :permalink, :position, :visible)
  end


end


