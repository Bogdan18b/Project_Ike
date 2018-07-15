# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
Business.destroy_all
BusinessType.destroy_all
Review.destroy_all

u1 = User.create!(email: "guest@yahoo.com", first_name: "guest", last_name: "b", password: "123456", zip_code: "12345")
u2 = User.create!(email: "user@yahoo.com", first_name: "user", last_name: "b", password: "123456", zip_code: "12345")
u3 = User.create!(email: "jimmy@yahoo.com", first_name: "jimmy", last_name: "b", password: "123456", zip_code: "12345")

bt1 = BusinessType.create!(name: "bars")
bt2 = BusinessType.create!(name: "restaurants")
bt3 = BusinessType.create!(name: "nightlife")
bt4 = BusinessType.create!(name: "pet stores")
bt5 = BusinessType.create!(name: "electronics")
bt6 = BusinessType.create!(name: "hardware stores")

b1 = Business.create!(name: "Avra", rating: 4, address: "141 E 48th St
New York, NY 10017", phone: "(212) 759-8550", website: "http://avrany.com/", hours: ["11:30am-11:30pm", "11:30am-11:30pm", "11:30am-11:30pm", "11:30am-11:30pm", "11:30am-12:00am", "11:00am-1:00am", "11:00am-11:00pm"], latitude: 40.755117, longitude: -73.972519, business_type_id: bt2.id)

photo1 = EzDownload.open('https://s3.amazonaws.com/project-zebra-dev/avra1.jpg')
photo2 = EzDownload.open('https://s3.amazonaws.com/project-zebra-dev/avra2.jpg')
photo3 = EzDownload.open('https://s3.amazonaws.com/project-zebra-dev/avra3.jpg')
b1.photos.attach(io: photo1, filename: 'avra1.jpg')
b1.photos.attach(io: photo2, filename: 'avra2.jpg')
b1.photos.attach(io: photo3, filename: 'avra3.jpg')
b1.save!

b2 = Business.create!(name: "Num Pang Kitchen", rating: 4, address: "1129 Broadway, New York, NY 10010", phone: "(212) 647-8889", website: "https://www.numpangkitchen.com/", hours: ["11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm"], latitude: 40.743437, longitude: -73.989264, business_type_id: bt2.id)

photo4 = EzDownload.open('https://s3.amazonaws.com/project-zebra-dev/numpang1.jpg')
photo5 = EzDownload.open('https://s3.amazonaws.com/project-zebra-dev/numpang2.jpg')
photo6 = EzDownload.open('https://s3.amazonaws.com/project-zebra-dev/numpang3.jpg')
b2.photos.attach(io: photo4, filename: 'numpang1.jpg')
b2.photos.attach(io: photo5, filename: 'numpang2.jpg')
b2.photos.attach(io: photo6, filename: 'numpang3.jpg')
b2.save!

r1 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u1.id, business_id: b1.id)

r2 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u2.id, business_id: b1.id)

r3 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u3.id, business_id: b1.id)

r4 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u3.id, business_id: b2.id)

r4 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u2.id, business_id: b2.id)

r4 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u1.id, business_id: b2.id)
