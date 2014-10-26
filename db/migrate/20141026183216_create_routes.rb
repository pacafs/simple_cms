class CreateRoutes < ActiveRecord::Migration
  def change
    create_table :routes do |t|
      t.string "name", :string, :limit => 25
      t.string "description"
      t.float "start_lat"
      t.float "start_lang"
      t.float "end_lat"
      t.float "end_lang"

      #t.datetime "created_at"
      #t.datetime "updated_at"
      t.timestamps
    end
    add_index('routes','name')
  end
end


