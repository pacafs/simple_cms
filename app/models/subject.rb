class Subject < ActiveRecord::Base

	has_many :pages

	# PAPERCLIP #
    has_attached_file :image, 
    :styles => { :medium => "300x300", :thumb => "64x64", :large => "500x500" },
    :default_url => "/assets/monkey.gif"
    # PAPERCLIP #

	validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]

	scope :visible, lambda { where(:visible => true) }
    scope :invisible, lambda { where(:visible => false) }
    scope :sorted, lambda { order("subjects.position ASC") }
    scope :newest_first, lambda { order("subjects.created_at DESC") }
    scope :search, lambda { |query| 
    	where(["name LIKE ?", "%#{query}%"]) # %#{query}% -> To find also a substring not only th exact value!
    }
end