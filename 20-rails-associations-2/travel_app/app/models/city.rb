class City < ApplicationRecord
  validates :name, uniqueness: true, presence: true

  has_many :trips, dependent: :delete_all
  has_many :travelers, through: :trips
end
