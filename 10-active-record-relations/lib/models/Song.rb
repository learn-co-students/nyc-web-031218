class Song < ActiveRecord::Base
  # this is the singular (but still) table name
  belongs_to :artist
end
