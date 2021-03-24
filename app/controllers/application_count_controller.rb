class ApplicationCountController < ApplicationController

  def index 
    @applications = Job.all
    render json: {count: @applications.length }
  end

  
end
