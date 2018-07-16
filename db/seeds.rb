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

bt1 = BusinessType.create!(name: "gyms")
bt2 = BusinessType.create!(name: "restaurants")
bt3 = BusinessType.create!(name: "nightlife")
bt4 = BusinessType.create!(name: "pet stores")
bt5 = BusinessType.create!(name: "electronics stores")
bt6 = BusinessType.create!(name: "hardware stores")

b1 = Business.create!(name: "Avra", address: "141 E 48th St
New York, NY 10017", phone: "(212) 759-8550", website: "http://avrany.com/", hours: ["11:30am-11:30pm", "11:30am-11:30pm", "11:30am-11:30pm", "11:30am-11:30pm", "11:30am-12:00am", "11:00am-1:00am", "11:00am-11:00pm"], latitude: 40.755117, longitude: -73.972519, business_type_id: bt2.id)

photo1 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/avra1.jpg')
photo2 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/avra2.jpg')
photo3 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/avra3.jpg')
b1.photos.attach(io: photo1, filename: 'avra1.jpg')
b1.photos.attach(io: photo2, filename: 'avra2.jpg')
b1.photos.attach(io: photo3, filename: 'avra3.jpg')
b1.save!

b2 = Business.create!(name: "Num Pang Kitchen", address: "1129 Broadway, New York, NY 10010", phone: "(212) 647-8889", website: "https://www.numpangkitchen.com/", hours: ["11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm"], latitude: 40.743437, longitude: -73.989264, business_type_id: bt2.id)

photo4 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/numpang1.jpg')
photo5 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/numpang2.jpg')
photo6 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/numpang3.jpg')
b2.photos.attach(io: photo4, filename: 'numpang1.jpg')
b2.photos.attach(io: photo5, filename: 'numpang2.jpg')
b2.photos.attach(io: photo6, filename: 'numpang3.jpg')
b2.save!

b3 = Business.create!(name: "Best Buy", address: "60 W 23rd St
New York, NY 10010", phone: "(212) 366-1373", website: "https://stores.bestbuy.com/", hours: ["10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "11:00am-8:00pm"], latitude: 40.742377, longitude: -73.992369, business_type_id: bt5.id)

photo7 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/bb1.jpg')
photo8 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/bb2.jpg')
photo9 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/bb3.jpg')
b3.photos.attach(io: photo7, filename: 'bb1.jpg')
b3.photos.attach(io: photo8, filename: 'bb2.jpg')
b3.photos.attach(io: photo9, filename: 'bb3.jpg')
b3.save!

b4 = Business.create!(name: "B&H Photo Video", address: "420 9th Ave
New York, NY 10001", phone: "(212) 615-8820", website: "https://www.bhphotovideo.com/", hours: ["9:00am-7:00pm", "9:00am-7:00pm", "9:00am-7:00pm", "9:00am-7:00pm", "9:00am-2:00pm", "Closed", "10:00am-6:00pm"], latitude: 40.752870, longitude: -73.996134, business_type_id: bt5.id)

photo10 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/bh1.jpg')
photo11 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/bh2.jpg')
photo12 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/bh3.jpg')
b4.photos.attach(io: photo10, filename: 'bh1.jpg')
b4.photos.attach(io: photo11, filename: 'bh2.jpg')
b4.photos.attach(io: photo12, filename: 'bh3.jpg')
b4.save!

b5 = Business.create!(name: "Bose", address: "10 Columbus Cir
New York, NY 10019", phone: "(212) 823-9314", website: "https://www.bose.com/", hours: ["10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "11:00am-8:00pm"], latitude: 40.768553, longitude: -73.983187, business_type_id: bt5.id)

photo13 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/bose1.jpg')
photo14 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/bose2.jpg')
photo15 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/bose3.jpg')
b5.photos.attach(io: photo13, filename: 'bose1.jpg')
b5.photos.attach(io: photo14, filename: 'bose2.jpg')
b5.photos.attach(io: photo15, filename: 'bose3.jpg')
b5.save!

b6 = Business.create!(name: "Sound By Singer", address: "242 West 27th St
New York, NY 10001", phone: "(212) 924-8600", website: "http://www.soundbysinger.com/", hours: ["Closed", "Closed", "12:00pm-6:00pm", "12:00pm:6:00pm", "12:00pm:6:00pm", "12:00pm:6:00pm", "Closed"], latitude: 40.747227, longitude: -73.995812, business_type_id: bt5.id)

photo16 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/singer1.jpg')
photo17 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/singer2.jpg')
photo18 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/singer3.jpg')
b6.photos.attach(io: photo16, filename: 'singer1.jpg')
b6.photos.attach(io: photo17, filename: 'singer2.jpg')
b6.photos.attach(io: photo18, filename: 'singer3.jpg')
b6.save!

b7 = Business.create!(name: "DataVision", address: "50 W 23rd St
New York, NY 10010", phone: "(888) 888-2087", website: "http://www.datavision.com/", hours: ["9:00am-8:00pm", "9:00am-8:00pm", "9:00am-8:00pm", "9:00am-8:00pm", "9:00am-8:00pm", "10:00am:7:00pm", "Closed"], latitude: 40.741926, longitude: -73.991910, business_type_id: bt5.id)

photo19 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/data1.jpg')
photo20 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/data2.jpg')
photo21 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/data3.jpg')
b7.photos.attach(io: photo19, filename: 'data1.jpg')
b7.photos.attach(io: photo20, filename: 'data2.jpg')
b7.photos.attach(io: photo21, filename: 'data3.jpg')
b7.save!

b8 = Business.create!(name: "New York Hardware & Locksmith", address: "130 W 37th St
New York, NY 10018", phone: "(212) 944-1811", website: "not available", hours: ["8:00am-6:00pm", "8:00am-6:00pm", "8:00am-6:00pm", "8:00am-6:00pm", "8:00am-3:00pm", "Closed", "Closed"], latitude: 40.752248, longitude: -73.988352, business_type_id: bt6.id)

photo22 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/hardware1.jpg')
photo23 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/hardware2.jpg')
photo24 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/hardware3.jpg')
b8.photos.attach(io: photo22, filename: 'hardware1.jpg')
b8.photos.attach(io: photo23, filename: 'hardware2.jpg')
b8.photos.attach(io: photo24, filename: 'hardware3.jpg')
b8.save!

b9 = Business.create!(name: "727 Hardware Corporation", address: "328 8th Ave
New York, NY 10001", phone: "(212) 243-7995", website: "not available", hours: ["8:00am-6:30pm", "8:00am-6:30pm", "8:00am-6:30pm", "8:00am-6:30pm", "8:00am-6:30pm", "9:00am-5:00pm", "Closed"], latitude: 40.747367, longitude: -73.996662, business_type_id: bt6.id)

photo25 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/hardcorp1.jpg')
photo26 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/hardcorp2.jpg')
photo27 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/hardcorp3.jpg')
b9.photos.attach(io: photo25, filename: 'hardcorp1.jpg')
b9.photos.attach(io: photo26, filename: 'hardcorp2.jpg')
b9.photos.attach(io: photo27, filename: 'hardcorp3.jpg')
b9.save!

b10 = Business.create!(name: "Scheman’s Bryant Park", address: "55 W 39th St
New York, NY 10018", phone: "(212) 398-0025", website: "http://www.schemanandgrant.com/", hours: ["7:30am-5:30pm", "7:30am-5:30pm", "7:30am-5:30pm", "7:30am-5:30pm", "7:30am-5:30pm", "8:00am-3:30pm", "Closed"], latitude: 40.752843, longitude: -73.984794, business_type_id: bt6.id)

photo28 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/schem1.jpg')
photo29 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/schem2.jpg')
photo30 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/schem3.jpg')
b10.photos.attach(io: photo28, filename: 'schem1.jpg')
b10.photos.attach(io: photo29, filename: 'schem2.jpg')
b10.photos.attach(io: photo30, filename: 'schem3.jpg')
b10.save!

b11 = Business.create!(name: "The Home Depot", address: "40 W 23rd St
New York, NY 10010", phone: "(212) 929-9571", website: "http://www.homedepot.com/", hours: ["7:00am-10:00pm", "7:00am-10:00pm", "7:00am-8:00pm", "7:00am-10:00pm", "7:00am-10:00pm", "7:00am-10:00pm", "8:00am-8:00pm"], latitude: 40.741848, longitude: -73.991359, business_type_id: bt6.id)

photo28 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/homed1.jpg')
photo29 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/homed2.jpg')
photo30 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/homed3.jpg')
b11.photos.attach(io: photo28, filename: 'homed1.jpg')
b11.photos.attach(io: photo29, filename: 'homed2.jpg')
b11.photos.attach(io: photo30, filename: 'homed3.jpg')
b11.save!

b12 = Business.create!(name: "Adco Security & Lock", address: "41 W 35th St
Manhattan, NY 10001", phone: "(212) 967-9500", website: "http://www.adcolocksmith.com/", hours: ["8:00am-6:00pm", "8:00am-6:00pm", "8:00am-6:00pm", "8:00am-6:00pm", "8:00am-6:00pm", "9:00am-6:00pm", "Closed"], latitude: 40.749980, longitude: -73.985950, business_type_id: bt6.id)

photo31 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/adco1.jpg')
photo32 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/adco2.jpg')
photo33 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/adco3.jpg')
b12.photos.attach(io: photo31, filename: 'adco1.jpg')
b12.photos.attach(io: photo32, filename: 'adco2.jpg')
b12.photos.attach(io: photo33, filename: 'adco3.jpg')
b12.save!

b13 = Business.create!(name: "Mid City Gym", address: "345 W 42nd St
New York, NY 10036", phone: "(212) 757-0850", website: "http://www.midcitygym.com/", hours: ["5:00am-11:00pm", "5:00am-11:00pm", "5:00am-11:00pm", "5:00am-11:00pm", "5:00am-11:00pm", "8:00am-8:00pm", "8:00am-8:00pm"], latitude: 40.758271, longitude: -73.991497, business_type_id: bt1.id)

photo34 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/mid1.jpg')
photo35 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/mid2.jpg')
photo36 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/mid3.jpg')
b13.photos.attach(io: photo34, filename: 'mid1.jpg')
b13.photos.attach(io: photo35, filename: 'mid2.jpg')
b13.photos.attach(io: photo36, filename: 'mid3.jpg')
b13.save!

b14 = Business.create!(name: "Blink Penn Station", address: "127 W 30th St
New York, NY 10001", phone: "(212) 795-2795", website: "http://www.blinkfitness.com/", hours: ["5:00am-11:00pm", "5:00am-11:00pm", "5:00am-11:00pm", "5:00am-11:00pm", "5:00am-10:00pm", "7:00am-7:00pm", "7:00am-7:00pm"], latitude: 40.747925, longitude: -73.990926, business_type_id: bt1.id)

photo37 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/blink1.jpg')
photo38 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/blink2.jpg')
photo39 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/blink3.jpg')
b14.photos.attach(io: photo37, filename: 'blink1.jpg')
b14.photos.attach(io: photo38, filename: 'blink2.jpg')
b14.photos.attach(io: photo39, filename: 'blink3.jpg')
b14.save!

b15 = Business.create!(name: "Ludlow Fitness", address: "100 Delancey St New York, NY 10002", phone: "(212) 260-9222", website: "http://www.ludlowfitness.com/", hours: ["5:30am-12:00am", "24 hours", "24 hours", "24 hours", "24 hours", "12:00am-9:00pm", "8:00am-9:00pm"], latitude: 40.719092, longitude: -73.988673, business_type_id: bt1.id)

photo37 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/ludlow1.jpg')
photo38 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/ludlow2.jpg')
photo39 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/ludlow3.jpg')
b15.photos.attach(io: photo37, filename: 'ludlow1.jpg')
b15.photos.attach(io: photo38, filename: 'ludlow2.jpg')
b15.photos.attach(io: photo39, filename: 'ludlow3.jpg')
b15.save!

b16 = Business.create!(name: "Inform Fitness", address: "201 E 56th St Fl 2 New York, NY 10022", phone: "(212) 755-9895", website: "http://www.informfitness.com/", hours: ["6:00am-9:00pm", "6:00am-9:00pm", "6:00am-9:00pm", "6:00am-9:00pm", "6:00am-9:00pm", "6:00am-3:00pm", "Closed"], latitude: 40.719092, longitude: -73.988673, business_type_id: bt1.id)

photo40 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/inform1.jpg')
photo41 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/inform2.jpg')
photo42 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/inform3.jpg')
b16.photos.attach(io: photo40, filename: 'inform1.jpg')
b16.photos.attach(io: photo41, filename: 'inform2.jpg')
b16.photos.attach(io: photo42, filename: 'inform3.jpg')
b16.save!

b17 = Business.create!(name: "Phyt NYC", address: "139 E 57th St Fl 5 New York, NY 10022", phone: "(212) 688-7498", website: "http://www.phytnyc.com/", hours: ["6:00am-9:00pm", "6:00am-9:00pm", "6:00am-9:00pm", "6:00am-9:00pm", "6:00am-8:00pm", "9:00am-6:00pm", "10:00am-6:00pm"], latitude: 40.761003, longitude: -73.968793, business_type_id: bt1.id)

photo43 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/phyt1.jpg')
photo44 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/phyt2.jpg')
photo45 = EzDownload.open('https://s3.amazonaws.com/project-zebra-seeding-dev/phyt3.jpg')
b17.photos.attach(io: photo43, filename: 'phyt1.jpg')
b17.photos.attach(io: photo44, filename: 'phyt2.jpg')
b17.photos.attach(io: photo45, filename: 'phyt3.jpg')
b17.save!

r1 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u1.id, business_id: b1.id)

r2 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u2.id, business_id: b1.id)

r3 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u3.id, business_id: b1.id)

r4 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u3.id, business_id: b2.id)

r4 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u2.id, business_id: b2.id)

r4 = Review.create!(body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", rating: 3, user_id: u1.id, business_id: b2.id)
