class CreateTravelers < ActiveRecord::Migration[5.1]
  def change
    create_table :travelers do |t|
      t.string :name

      t.timestamps
    end
  end
end
