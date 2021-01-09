class BookingSerializer < ActiveModel::Serializer
  attributes :id, :startDate, :endDate, :firstName, :lastName, :phoneNumber, :emailAdress, :car_id
end
