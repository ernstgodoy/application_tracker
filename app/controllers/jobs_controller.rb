class JobsController < ApplicationController
  
  def index 
    if params[:role] 
      @jobs = Job.select { |obj| obj.title == params[:role] }
      render json: @jobs
    else
      @jobs = Job.all 
      render json: @jobs
    end
  end 

  def show
    @jobs = Job.find(params[:id])
    render json: @jobs
  end

  def create
    @job = Job.create(job_params)
    if @job.valid?
      render json: @job
    else
      render json: @job.errors, status: 422
    end
  end

  def destroy
    Job.destroy(params[:id])
    render json: Job.all
  end

  def update
    @job = Job.find(params[:id])
    @job.update(job_params)
    if @job.valid?
      render json: @job
    else
      render json: @job.errors, status: 422
    end
  end

  private 

  def job_params
    params.require(:job).permit(:user_id, :company, :title, :status, :date_applied, :last_follow_up)
  end

end
