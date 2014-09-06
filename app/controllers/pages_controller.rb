class PagesController < ApplicationController

  layout false

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
      flash[:page] = "CREATED"
      redirect_to(:action => "index")
    else
      flash[:page] = "ERROR"
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
      flash[:page] = "UPDATED"
      redirect_to(:action => "show", :id => @page.id)
    else
      flash[:page] = "ERROR"
      render("index")
    end

  end

  def delete
    @page = Page.find(params[:id])
  end

  def destroy
    page = Page.find(params[:id]).destroy
    redirect_to(:action => 'index')
    flash[:page] = "DELETED"
  end

  private

  def safeparams
    params.require(:page).permit(:name, :permalink, :position, :visible)
  end


end


