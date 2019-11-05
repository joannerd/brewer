class BreweryGuide < ActiveRecord::Migration[5.2]
  def change
    add_column :brewery_guides, :guide_id, :integer
    add_index :brewery_guides, :guide_id
  end
end
