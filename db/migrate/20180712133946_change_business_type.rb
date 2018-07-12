class ChangeBusinessType < ActiveRecord::Migration[5.2]
  def change
    add_timestamps :business_types
  end
end
