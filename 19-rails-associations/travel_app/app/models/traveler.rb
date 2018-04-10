class Traveler < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :visas
end
