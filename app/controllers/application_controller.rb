class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token

  private

	def after_sign_in_path_for(resource)
		"/dash"
	end

end
