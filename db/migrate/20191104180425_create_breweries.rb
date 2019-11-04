class CreateBreweries < ActiveRecord::Migration[5.2]
  def change
    create_table :breweries do |t|
      t.string :name, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.string :address, null: false
      t.string :website, null: false
      t.integer :city_id, null: false
      t.integer :guide_id, null: false

      t.timestamps
    end
    add_index :breweries, :name
    add_index :breweries, :city_id
    add_index :breweries, :guide_id
  end
end
