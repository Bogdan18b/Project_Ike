class ChangeUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :zip_code
    add_column :users, :zip_code, :string
    add_column :users, :month, :string
    add_column :users, :day, :string
    add_column :users, :year, :string
    remove_column :users, :email
    rename_column :users, :username, :email
  end
end
