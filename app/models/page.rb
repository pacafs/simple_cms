class Page < ActiveRecord::Base
	
	belongs_to :subject # belongs_to is where the table has the FOREIGN KEY
	has_and_belongs_to_many :editors, :class_name => "AdminUser"

	scope :visible, lambda { where(:visible => true) }
	scope :newest_first, lambda { order("pages.created_at DESC") }


end
