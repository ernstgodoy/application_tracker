class Job < ApplicationRecord
  belongs_to :user
  validates_presence_of :user_id, :company, :title, :status, :date_applied, :last_follow_up

end
