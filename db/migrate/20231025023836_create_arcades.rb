class CreateArcades < ActiveRecord::Migration[6.1]
  def change
    create_table :arcades do |t|
      t.string :name
      t.integer :num_of_games
      t.string :img_url

      t.timestamps
    end
  end
end
