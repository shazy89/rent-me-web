class Car < ApplicationRecord
    has_many :bookings
    validates :make, presence: true
    validates :model, presence: true
    validates :vehicleType, presence: true
    validates :capacity, presence: true
    validates :baggingCapacity, presence: true
    validates :rentPrice, presence: true

end
