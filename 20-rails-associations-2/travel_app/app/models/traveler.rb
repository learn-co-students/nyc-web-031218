class Traveler < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :visas, dependent: :delete_all
  has_many :trips, dependent: :delete_all
  has_many :cities, through: :trips
end
