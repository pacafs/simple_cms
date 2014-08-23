class SubjectsController < ApplicationController

  layout false

  def index
   @subjects  = Subject.all
  end

  def new
    @subject = Subject.new
  end

  def create
    @subject = Subject.new(subject_params)

    if @subject.save
      redirect_to(:action => 'index')
    else
      render('new')
    end

  end

  def show
  	@subject = Subject.find(params[:id])
  end

  def edit
    @subject = Subject.find(params[:id])
  end

  def update
    @subject = Subject.find(params[:id])

    @subject.update_attributes(subject_params)

    if @subject.update_attributes(subject_params)
      redirect_to(:action => 'show', :id => @subject.id)
    else
      render('index')
    end

  end

  def delete
    @subject = Subject.find(params[:id])
  end

  def destroy
    @subject = Subject.find(params[:id])
    @subject.destroy
    redirect_to(:action => 'index')
  end

  private

  def subject_params
    params.require(:subject).permit(:name, :position, :visible, :image)
  end


end