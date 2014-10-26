class MarkersRoutesJoin < ActiveRecord::Migration
  
  def up
  	create_table :markers_routes, :id => false do |t|
  		t.integer "marker_id"
  		t.integer "route_id"
  	end
  	add_index :markers_routes, ['marker_id','route_id']
  end

  def down
  	drop_table :markers_routes
  end

end




