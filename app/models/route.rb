class Route < ActiveRecord::Base

	has_many :user_routes
	
	has_and_belongs_to_many :markers
end

