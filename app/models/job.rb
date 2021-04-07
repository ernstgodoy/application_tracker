class Job < ApplicationRecord
  belongs_to :user

  scope :filter_by_role, -> (role) { where title: role } 
  scope :filter_by_company, -> (company) { where company: company }
end
