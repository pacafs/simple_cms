class User < ActiveRecord::Base

	# To configure a different table
	# self.table_name = "admin_users"
	has_many :user_routes
	
	has_attached_file :profile_image, :styles => { :medium => "300x300>", :thumb => "64x64", :large => "500x500" }
	validates_attachment_content_type :profile_image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]


end

