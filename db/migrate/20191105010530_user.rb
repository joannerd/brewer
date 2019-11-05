class User < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string, null: false
    remove_index :users, :email
    add_index :users, :username
  end
end
