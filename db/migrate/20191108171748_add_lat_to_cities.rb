class AddLatToCities < ActiveRecord::Migration[5.2]
  def change
    add_column :cities, :lat, :float
    add_column :cities, :lng, :float
  end
end
