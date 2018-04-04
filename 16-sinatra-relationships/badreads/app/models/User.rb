class User < ActiveRecord::Base
  has_many :favorites
  has_many :books, through: :favorites
end
