class CreateUserRoutes < ActiveRecord::Migration
  def change
    create_table :user_routes do |t|
      t.integer "user_id"
      t.integer "route_id"
      t.timestamps
    end
    add_index :user_routes, ["user_id","route_id"]
  end
end