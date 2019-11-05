class CreateBreweryGuides < ActiveRecord::Migration[5.2]
  def change
    create_table :brewery_guides do |t|
      t.integer :brewery_id, null: false

      t.timestamps
    end
    add_index :brewery_guides, :brewery_id
  end
end
