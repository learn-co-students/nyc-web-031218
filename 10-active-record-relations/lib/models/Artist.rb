class Artist < ActiveRecord::Base
  # this is the plural table name
  has_many :songs
end
