class CreateWatch < ActiveRecord::Migration
  def change
    create_table :watches do |t|
      t.string :name
      t.integer :price
    end
  end
end
