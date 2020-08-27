class CreateJobs < ActiveRecord::Migration[6.0]
  def change
    create_table :jobs do |t|
      t.integer :user_id
      t.string :company
      t.string :title
      t.string :status
      t.date :date_applied
      t.date :last_follow_up

      t.timestamps
    end
  end
end
