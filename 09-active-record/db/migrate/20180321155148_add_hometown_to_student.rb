class AddHometownToStudent < ActiveRecord::Migration[5.1]
  def change
    add_column :students, :hometown, :string
  end
end
