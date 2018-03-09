class AddUsernameToComments < ActiveRecord::Migration[5.1]
  def change
    change_table :comments do |t|
      t.string :comment_user
    end
  end
end
