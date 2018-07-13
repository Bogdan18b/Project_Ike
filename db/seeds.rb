# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#dont forget destroy all when seeding

Business.destroy_all
BusinessType.destroy_all

bt1 = BusinessType.create!(name: "bars")
bt2 = BusinessType.create!(name: "restaurants")
bt3 = BusinessType.create!(name: "nightlife")
bt4 = BusinessType.create!(name: "pet stores")
bt5 = BusinessType.create!(name: "electronics")
bt6 = BusinessType.create!(name: "hardware stores")

b1 = Business.create!(name: "NOIR", rating: 4, address: "22 W 38", phone: "212-344-5555", website: "www.drink.com", hours: ["9:00am-2:00am", "9:00am-2:00am", "9:00am-2:00am", "9:00am-2:00am", "9:00am-2:00am", "9:00am-1:00am", "9:00am-1:00am"], latitude: 35, longitude: 44, business_type_id: bt2.id)

photo1 = File.open('app/assets/images/food.jpg')
photo2 = File.open('app/assets/images/food2.jpg')
photo3 = File.open('app/assets/images/morefood.jpg')
b1.photos.attach(io: photo1, filename: 'food.jpg')
b1.photos.attach(io: photo2, filename: 'food2.jpg')
b1.photos.attach(io: photo3, filename: 'morefood.jpg')
b1.save!

b2 = Business.create!(name: "Irish Bar", rating: 4, address: "22 W 38", phone: "212-344-5555", website: "www.drink.com", hours: ["9:00am-2:00am", "9:00am-2:00am", "9:00am-2:00am", "9:00am-2:00am", "9:00am-2:00am", "9:00am-1:00am", "9:00am-1:00am"], latitude: 35, longitude: 44, business_type_id: bt1.id)
