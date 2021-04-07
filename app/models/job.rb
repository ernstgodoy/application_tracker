class Job < ApplicationRecord
  belongs_to :user
  validates_presence_of :user_id, :company, :title, :status, :date_applied, :last_follow_up

  scope :filter_by_role, -> (role) { where title: role }
  scope :filter_by_role, -> (status) { where status: status }
end
