class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title
      t.string :snippet
      t.integer :user_id

      t.timestamps
    end
  end
end
