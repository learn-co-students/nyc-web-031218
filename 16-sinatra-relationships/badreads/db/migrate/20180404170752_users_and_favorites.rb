class UsersAndFavorites < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username
    end

    create_table :favorites do |t|
      # t.integer :user_id
      t.references :user
      t.references :book
    end
  end
end
