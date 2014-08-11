class Page < ActiveRecord::Base
	
	belongs_to :subject # belongs_to is where the table has the FOREIGN KEY

end
