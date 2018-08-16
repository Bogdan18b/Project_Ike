class AddTagsToBusinesses < ActiveRecord::Migration[5.2]
  def change
      add_column :businesses, :tags, :string, array: true, default: []
  end
end
