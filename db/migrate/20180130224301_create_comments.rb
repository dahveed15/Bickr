class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :user_id
      t.integer :imageable_id
      t.string :imageable_type

      t.timestamps
    end
  end
end
