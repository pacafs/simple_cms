class Page < ActiveRecord::Base
	
	belongs_to :subject # belongs_to is where the table has the FOREIGN KEY

	scope :visible, lambda { where(:visible => true) }
	scope :newest_first, lambda { order("pages.created_at DESC") }


end
