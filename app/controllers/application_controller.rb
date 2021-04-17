class ApplicationController < ActionController::Base

	before_action :configure_permitted_parameters, if: :devise_controller?

	protected

	def configure_permitted_parameters
			devise_parameter_sanitizer.permit(:sign_up, keys: [:email, :password, :first_name, :last_name, :job_title, :password_confirmation])
	end

  private

	def after_sign_in_path_for(resource)
		"/dashboard"
	end

end
