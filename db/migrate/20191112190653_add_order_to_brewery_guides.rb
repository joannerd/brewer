class AddOrderToBreweryGuides < ActiveRecord::Migration[5.2]
  def change
    add_column :brewery_guides, :order, :integer
    add_index :brewery_guides, :order
  end
end
