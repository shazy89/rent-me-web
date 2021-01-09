class CreateBookings < ActiveRecord::Migration[6.0]
  def change
    create_table :bookings do |t|
      t.text :startDate
      t.text :endDate
      t.text :firstName
      t.text :lastName
      t.text :phoneNumber
      t.text :emailAdress
      t.text :car_id

      t.timestamps
    end
  end
end
