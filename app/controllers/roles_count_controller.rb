class RolesCountController < ApplicationController


  def index 
    @metrics = Hash.new
    @jobs = Job.all
    @jobs.map do |x|
      role = x.title
      @metrics.has_key?(role) ? (@metrics[role] += 1) : (@metrics[role] = 1)
    end
    render json: @metrics
  end
end
