class CreateBagels < ActiveRecord::Migration[5.1]
  def change
    create_table :bagels do |t|
      t.string :name
      t.integer :rating

      t.timestamps
    end
  end
end
