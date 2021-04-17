class Job < ApplicationRecord
  belongs_to :user
  validates_presence_of :user_id, :company, :role, :status, :date_applied, :last_follow_up

  scope :filter_by_role, -> (role) { where role: role }
  scope :filter_by_status, -> (status) { where status: status }
end
