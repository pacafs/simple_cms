class CreateUsers2 < ActiveRecord::Migration
  def up
    create_table :users do |t|
      t.string "username", :string, :limit => 25
      t.string "email", :default => "", :null => false
      t.string "password_digest"
      t.attachment :profile_image
      #t.datetime "created_at"
      #t.datetime "updated_at"
      t.timestamps # <- datetimes
    end
    add_index('users', 'username')
  end

  def down
  	drop_table :users
  end
end

