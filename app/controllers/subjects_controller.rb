class SubjectsController < ApplicationController
  # layout false

  def index
    @subjects  = Subject.sorted
  end

  def new
    @subject = Subject.new
  end

  def create
    
    @subject = Subject.new(subject_params)

    if @subject.save
      flash[:notice] = "SUBJECT CREATED"
      redirect_to(:action => 'index')
    else
      render('new')
      flash[:notice] = "ERROR"
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
      flash[:notice] = "SUBJECT UPDATED"
      redirect_to(:action => 'show', :id => @subject.id)
    else
      flash[:notice] = "ERROR"
      render('index')
    end

  end

  def delete
    @subject = Subject.find(params[:id])
  end

  def destroy
    subject = Subject.find(params[:id]).destroy
    redirect_to(:action => 'index')
    flash[:notice] = "SUBJECT DELETED"
  end

  private

  def subject_params
    params.require(:subject).permit(:name, :position, :visible, :image)
  end


end