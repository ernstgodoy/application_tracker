class RolesController < ApplicationController

  def index 
    @roles = Set.new 
    Job.all.map{|j| @roles.add j.title}
    render json: @roles
  end
end
