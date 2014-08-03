class CreatePages < ActiveRecord::Migration
  def change
    create_table :pages do |t|
    	t.integer "subject_id"
    	#same as: t.references :subject
    	t.string "name"
    	t.string "permalink"
    	t.integer "position"
    	t.boolean "visible", :default => false
        t.timestamps
    end
    # foreign keys should always have an index!
    add_index("pages", "subject_id")
    add_index("pages", "permalink")
  end
end
