class RecreateReviews < ActiveRecord::Migration[5.2]
  def change
    drop_table :reviews

    create_table :reviews do |t|
      t.text :body, null: false
      t.integer :rating, null: false
      t.integer :user_id, null: false
      t.integer :business_id, null: false
      t.timestamps
    end

    add_index :reviews, :user_id
    add_index :reviews, :business_id
  end
end
