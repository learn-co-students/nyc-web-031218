class Trip < ApplicationRecord
  belongs_to :traveler
  belongs_to :city
end
