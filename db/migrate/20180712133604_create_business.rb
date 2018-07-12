class CreateBusiness < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :hours, null: false
      t.string :phone, null: false
      t.string :website, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :business_type_id, null: false
      t.timestamps
    end

    add_index :businesses, :business_type_id
  end
end
