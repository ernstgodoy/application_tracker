class RolesController < ApplicationController

  def index 
    @roles = Set.new 
    Job.all.map{|j| @roles.add j.title.titleize}
    render json: @roles
  end
  
end
