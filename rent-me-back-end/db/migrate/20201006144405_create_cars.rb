class CreateCars < ActiveRecord::Migration[6.0]
  def change
    create_table :cars do |t|
      t.text :make
      t.text :model
      t.text :vehicleType
      t.text :capacity
      t.text :baggingCapacity
      t.text :rentPrice

      t.timestamps
    end
  end
end
