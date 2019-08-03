class CreateBusinesss < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :hours, null: false
      t.string :phone, null: false
      t.string :website, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :rating, null: false
      t.integer :category_id, null: false
      t.string :tags, array: true, default: []
      t.string :hours, array: true, default: []
      t.timestamps
    end
    add_index :businesses, :category_id
    add_timestamps :categories
  end
end
