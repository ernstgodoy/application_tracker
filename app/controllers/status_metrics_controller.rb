class StatusMetricsController < ApplicationController
  def index 
    @metrics = Hash.new
    @jobs = Job.all
    @jobs.map do |x|
      status = x.status
      @metrics.has_key?(status) ? (@metrics[status] += 1) : (@metrics[status] = 1)
    end
    render json: @metrics
  end
end
