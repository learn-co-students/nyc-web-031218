class CreateVisas < ActiveRecord::Migration[5.1]
  def change
    create_table :visas do |t|
      t.string :country
      t.references :traveler, foreign_key: true

      t.timestamps
    end
  end
end
