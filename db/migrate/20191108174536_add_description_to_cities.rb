class AddDescriptionToCities < ActiveRecord::Migration[5.2]
  def change
    add_column :cities, :description, :text
  end
end
