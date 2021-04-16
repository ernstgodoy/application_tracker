class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :jobs, :title, :role
  end
end
