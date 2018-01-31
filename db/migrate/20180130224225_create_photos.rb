class CreatePhotos < ActiveRecord::Migration[5.1]
  def change
    create_table :photos do |t|
      t.integer :user_id
      t.integer :album_id
      t.string :img_url

      t.timestamps
    end
  end
end
