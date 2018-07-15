# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


#dont forget destroy all when seeding
User.destroy_all
Business.destroy_all
BusinessType.destroy_all
Review.destroy_all

u1 = User.create!(email: "bogdan@yahoo.com", first_name: "bogdan", last_name: "b", password: "123456", zip_code: "12345")
u2 = User.create!(email: "user@yahoo.com", first_name: "user", last_name: "b", password: "123456", zip_code: "12345")
u3 = User.create!(email: "jimmy@yahoo.com", first_name: "jimmy", last_name: "b", password: "123456", zip_code: "12345")

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
photo4 = File.open('app/assets/images/ikelogo.png')
b1.photos.attach(io: photo1, filename: 'food.jpg')
b1.photos.attach(io: photo2, filename: 'food2.jpg')
b1.photos.attach(io: photo3, filename: 'morefood.jpg')
b1.save!


b2 = Business.create!(name: "Irish Bar", rating: 4, address: "22 W 38", phone: "212-344-5555", website: "www.drink.com", hours: ["9:00am-2:00am", "9:00am-2:00am", "9:00am-2:00am", "9:00am-2:00am", "9:00am-2:00am", "9:00am-1:00am", "9:00am-1:00am"], latitude: 35, longitude: 44, business_type_id: bt3.id)

file = EzDownload.open('https://s3.amazonaws.com/project-zebra-dev/6z9ACyG25qaFsLawxoYDL6YZ')
b2.photos.attach(io: file, filename: '6z9ACyG25qaFsLawxoYDL6YZ.jpg')
file2 = EzDownload.open('https://s3.amazonaws.com/project-zebra-dev/VDgopPD6q31Gv587ufW3ijtw')
b2.photos.attach(io: file2, filename: 'VDgopPD6q31Gv587ufW3ijtw.jpg')
b2.photos.attach(io: photo4, filename: 'ikelogo.png')
b2.save!

r1 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u1.id, business_id: b1.id)

r2 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u2.id, business_id: b1.id)

r3 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u1.id, business_id: b2.id)

r4 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u3.id, business_id: b2.id)
