class CreateGuides < ActiveRecord::Migration[5.2]
  def change
    create_table :guides do |t|
      t.string :title, null: false
      t.text :body, null: false
      t.integer :city_id, null: false

      t.timestamps
    end
    add_index :guides, :title
    add_index :guides, :city_id
  end
end
