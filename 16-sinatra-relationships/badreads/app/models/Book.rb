class Book < ActiveRecord::Base
  belongs_to :author
  has_many :favorites
  has_many :users, through: :favorites
end
