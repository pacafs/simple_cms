class CreateMarkers < ActiveRecord::Migration
  def change
    create_table :markers do |t|
      t.string "name", :string, :limit => 25
      t.string "description"
      t.float "lat"
      t.float "lang"
      t.text "content"
      t.attachment :marker_image

      #t.datetime "created_at"
      #t.datetime "updated_at"
      t.timestamps
    end
    add_index('markers','name')
  end
end


