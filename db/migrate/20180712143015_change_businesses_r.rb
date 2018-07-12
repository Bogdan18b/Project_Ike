class ChangeBusinessesR < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :rating, :integer
  end
end
