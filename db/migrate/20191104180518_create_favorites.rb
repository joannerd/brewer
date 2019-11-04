class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :brewery_id, null: false

      t.timestamps
    end
    add_index :favorites, :user_id
    add_index :favorites, :brewery_id
  end
end
