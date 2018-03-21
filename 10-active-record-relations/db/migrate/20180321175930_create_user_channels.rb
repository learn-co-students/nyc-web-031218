class CreateUserChannels < ActiveRecord::Migration[5.1]
  def change
    create_table :user_channels do |t|
      t.integer :user_id
      t.integer :channel_id
    end
  end
end
