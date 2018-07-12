class CreateBusinessType < ActiveRecord::Migration[5.2]
  def change
    create_table :business_types do |t|
      t.string :name, null: false
    end
  end
end
