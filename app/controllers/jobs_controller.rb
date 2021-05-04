class JobsController < ApplicationController

  def index
    @jobs_payload = Hash.new
    @per_page = params[:per_page] || 10
    @current_page = params[:page] || 1

    @jobs = current_user.jobs.paginate(page: @current_page, per_page: @per_page)
    @jobs = @jobs.filter_by_role(params[:role]) if params[:role].present?
    @jobs = @jobs.filter_by_status(params[:status]) if params[:status].present?

    @jobs_payload[:per_page] = @per_page.to_i
    @jobs_payload[:current_page] = @current_page.to_i
    @jobs_payload[:total_pages] = (current_user.jobs.length/@per_page.to_i.to_f).ceil()
    @jobs_payload[:total_jobs] = current_user.jobs.length
    @jobs_payload[:jobs] = @jobs

    render json: @jobs_payload
  end 

  def show
    @jobs = current_user.jobs.find(params[:id])
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
    @jobs = current_user.jobs
    @metrics[:total_applications] = @jobs.length
    @jobs.map do |x|
      status = x.status
      @metrics[:statuses].has_key?(status) ? (@metrics[:statuses][status] += 1) : (@metrics[:statuses][status] = 1)
    end
    render json: @metrics
  end

  def roles_count
    @metrics = Hash.new
    @jobs = current_user.jobs
    @jobs.map do |x|
      role = x.role
      @metrics.has_key?(role) ? (@metrics[role] += 1) : (@metrics[role] = 1)
    end
    render json: @metrics
  end

  private 

  def job_params
    params.require(:job).permit(:user_id, :company, :role, :status, :date_applied, :last_follow_up)
  end

end
