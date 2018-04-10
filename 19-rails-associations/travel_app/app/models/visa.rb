class Visa < ApplicationRecord
  validates :country, presence: true

  belongs_to :traveler
end
