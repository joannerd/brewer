class CreateCities < ActiveRecord::Migration[5.2]
  def change
    create_table :cities do |t|
      t.string :name, null: false
      t.string :state, null: false

      t.timestamps
    end
    add_index :cities, :name
    add_index :cities, :state
  end
end
