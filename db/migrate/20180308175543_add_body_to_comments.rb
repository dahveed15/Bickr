class AddBodyToComments < ActiveRecord::Migration[5.1]
  def change
    change_table :comments do |t|
      t.integer :photo_id
      t.string :body
      t.remove :imageable_id
      t.remove :imageable_type
    end
  end
end
