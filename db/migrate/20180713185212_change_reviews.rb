class ChangeReviews < ActiveRecord::Migration[5.2]
  def change
    add_column :reviews, :body, :text, null: false
    add_column :reviews, :rating, :integer, null: false
    add_column :reviews, :user_id, :integer, null: false
    add_column :reviews, :business_id, :integer, null: false
    add_timestamps :reviews
    add_index :reviews, :user_id
    add_index :reviews, :business_id
  end
end
