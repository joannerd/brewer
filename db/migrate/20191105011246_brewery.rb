class Brewery < ActiveRecord::Migration[5.2]
  def change
    add_column :breweries, :description, :text
    remove_column :breweries, :guide_id
  end
end
