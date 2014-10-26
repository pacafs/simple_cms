class Marker < ActiveRecord::Base
	
	has_and_belongs_to_many :routes

	has_attached_file :marker_image, :styles => { :medium => "300x300>", :thumb => "64x64", :large => "500x500" }
	validates_attachment_content_type :marker_image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
