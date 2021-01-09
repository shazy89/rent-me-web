class AddImgToCars < ActiveRecord::Migration[6.0]
  def change
    add_column :cars, :img, :string
  end
end
