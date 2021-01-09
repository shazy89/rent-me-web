class Booking < ApplicationRecord
    belongs_to :car
    validates :startDate, presence: true
    validates :endDate, presence: true
    validates :firstName, presence: true
    validates :lastName, presence: true
    validates :phoneNumber, presence: true
    validates :emailAdress, presence: true

    def normalize_phone_number
        if self.phoneNumber != nil
        self.phoneNumber.phony_formatted!(normalize: :US, format: :international ) 
        end
    end

end
