# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Arcade.destroy_all
Review.destroy_all

puts("Data Deleted..")
puts("Data Loading..")

#USER
a = User.create(username: "Fernando", password: "123", password_confirmation: "123")
b = User.create(username: "Josh", password: "123", password_confirmation: "123")
c = User.create(username: "Justin", password: "123", password_confirmation: "123")

#Arcade 
arc1 = Arcade.create(name: "Barcade", num_of_games: 25, img_url: "https://parknewhaven.com/wp-content/uploads/2016/10/deal-barcade.jpg")
arc2 = Arcade.create(name: "Bowlero", num_of_games: 10, img_url: "https://addisontexas.net/sites/default/files/imageattachments/busdir/8361/bowlero.png")
arc3 = Arcade.create(name: "Dave'n'Busters", num_of_games: 50, img_url: "https://live.staticflickr.com/2904/14110169303_98984fc612_b.jpg")