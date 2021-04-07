class JobsController < ApplicationController
  def index
    @jobs = Job.all
    @jobs = @jobs.filter_by_role(params[:role]) if params[:role].present?
    @jobs = @jobs.filter_by_status(params[:status]) if params[:status].present?
    render json: @jobs
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

  def status_metrics 
    @metrics = Hash.new
    @metrics[:statuses] = Hash.new
    @jobs = Job.all
    @metrics[:total_applications] = @jobs.length
    @jobs.map do |x|
      status = x.status
      @metrics[:statuses].has_key?(status) ? (@metrics[:statuses][status] += 1) : (@metrics[:statuses][status] = 1)
    end
    render json: @metrics
  end

  def roles_count
    @metrics = Hash.new
    @jobs = Job.all
    @jobs.map do |x|
      role = x.title
      @metrics.has_key?(role) ? (@metrics[role] += 1) : (@metrics[role] = 1)
    end
    render json: @metrics
  end

  private 

  def job_params
    params.require(:job).permit(:user_id, :company, :title, :status, :date_applied, :last_follow_up)
  end

end
