# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Business.destroy_all
Category.destroy_all
Review.destroy_all

u1 = User.create!(email: "guest@yahoo.com", first_name: "kilian", last_name: "mbappe", password: "123456", zip_code: "12345")
u2 = User.create!(email: "emily@yahoo.com", first_name: "emily", last_name: "thereau", password: "123456", zip_code: "12345")
u3 = User.create!(email: "jimmy@yahoo.com", first_name: "jimmy", last_name: "b", password: "123456", zip_code: "12345")

bt1 = Category.create!(name: "Gyms")
bt2 = Category.create!(name: "Restaurants")
bt3 = Category.create!(name: "Salons and Spas")
bt4 = Category.create!(name: "Pet Stores")
bt5 = Category.create!(name: "Electronic Stores")
bt6 = Category.create!(name: "Hardware Stores")
b1 = Business.create!(name: "Avra", address: "141 E 48th St, New York, NY 10017", phone: "(212) 759-8550", website: "http://avrany.com/", hours: ["11:30am-11:30pm", "11:30am-11:30pm", "11:30am-11:30pm", "11:30am-11:30pm", "11:30am-12:00am", "11:00am-1:00am", "11:00am-11:00pm"], rating: 0, tags: ["mediteranean", "greek", "seafood"], latitude: 40.755117, longitude: -73.972519, category_id: bt2.id)

photo1 = open('https://ike-reloaded.s3.amazonaws.com/avra1.jpg')
photo2 = open('https://ike-reloaded.s3.amazonaws.com/avra2.jpg')
photo3 = open('https://ike-reloaded.s3.amazonaws.com/avra3.jpg')
b1.photos.attach(io: photo1, filename: 'avra1.jpg', content_type: 'image/jpg')
b1. photos.attach(io: photo2, filename: 'avra2.jpg')
b1. photos.attach(io: photo3, filename: 'avra3.jpg')
b1.save!

b2 = Business.create!(name: "Num Pang Kitchen", address: "1129 Broadway, New York, NY 10010", phone: "(212) 647-8889", website: "https://www.numpangkitchen.com/", hours: ["11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm", "11:00am-9:00pm"], rating: 0, tags: ["sandwiches", "cambodian", "lunch"], latitude: 40.743437, longitude: -73.989264, category_id: bt2.id)

photo4 = open('https://ike-reloaded.s3.amazonaws.com/numpang1.jpg')
photo5 = open('https://ike-reloaded.s3.amazonaws.com/numpang2.jpg')
photo6 = open('https://ike-reloaded.s3.amazonaws.com/numpang3.jpg')
b2. photos.attach(io: photo4, filename: 'numpang1.jpg')
b2. photos.attach(io: photo5, filename: 'numpang2.jpg')
b2. photos.attach(io: photo6, filename: 'numpang3.jpg')
b2.save!

b3 = Business.create!(name: "Best Buy", address: "60 W 23rd St, New York, NY 10010", phone: "(212) 366-1373", website: "https://stores.bestbuy.com/", hours: ["10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "11:00am-8:00pm"], rating: 0, tags: ["electronics", "appliances", "computers"], latitude: 40.742377, longitude: -73.992369, category_id: bt5.id)

photo7 = open('https://ike-reloaded.s3.amazonaws.com/bb1.jpg')
photo8 = open('https://ike-reloaded.s3.amazonaws.com/bb2.jpg')
photo9 = open('https://ike-reloaded.s3.amazonaws.com/bb3.jpg')
b3. photos.attach(io: photo7, filename: 'bb1.jpg')
b3. photos.attach(io: photo8, filename: 'bb2.jpg')
b3. photos.attach(io: photo9, filename: 'bb3.jpg')
b3.save!

b4 = Business.create!(name: "B&H Photo Video", address: "420 9th Ave, New York, NY 10001", phone: "(212) 615-8820", website: "https://www.bhphotovideo.com/", hours: ["9:00am-7:00pm", "9:00am-7:00pm", "9:00am-7:00pm", "9:00am-7:00pm", "9:00am-2:00pm", "Closed", "10:00am-6:00pm"], rating: 0, tags: ["electronics", "appliances", "computers"], latitude: 40.752870, longitude: -73.996134, category_id: bt5.id)

photo10 = open('https://ike-reloaded.s3.amazonaws.com/bh1.jpg')
photo11 = open('https://ike-reloaded.s3.amazonaws.com/bh2.jpg')
photo12 = open('https://ike-reloaded.s3.amazonaws.com/bh3.jpg')
b4. photos.attach(io: photo10, filename: 'bh1.jpg')
b4. photos.attach(io: photo11, filename: 'bh2.jpg')
b4. photos.attach(io: photo12, filename: 'bh3.jpg')
b4.save!

b5 = Business.create!(name: "Bose", address: "10 Columbus Circle, New York, NY 10019", phone: "(212) 823-9314", website: "https://www.bose.com/", hours: ["10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "11:00am-8:00pm"], rating: 0, tags: ["electronics", "headphones", "audio"], latitude: 40.768553, longitude: -73.983187, category_id: bt5.id)

photo13 = open('https://ike-reloaded.s3.amazonaws.com/bose1.jpg')
photo14 = open('https://ike-reloaded.s3.amazonaws.com/bose2.jpg')
photo15 = open('https://ike-reloaded.s3.amazonaws.com/bose3.jpg')
b5. photos.attach(io: photo13, filename: 'bose1.jpg')
b5. photos.attach(io: photo14, filename: 'bose2.jpg')
b5. photos.attach(io: photo15, filename: 'bose3.jpg')
b5.save!

b6 = Business.create!(name: "Sound By Singer", address: "242 West 27th St, New York, NY 10001", phone: "(212) 924-8600", website: "http://www.soundbysinger.com/", hours: ["Closed", "Closed", "12:00pm-6:00pm", "12:00pm:6:00pm", "12:00pm:6:00pm", "12:00pm:6:00pm", "Closed"], rating: 0, tags: ["electronics", "audio", "headphones"], latitude: 40.747227, longitude: -73.995812, category_id: bt5.id)

photo16 = open('https://ike-reloaded.s3.amazonaws.com/singer1.jpg')
photo17 = open('https://ike-reloaded.s3.amazonaws.com/singer2.jpg')
photo18 = open('https://ike-reloaded.s3.amazonaws.com/singer3.jpg')
b6. photos.attach(io: photo16, filename: 'singer1.jpg')
b6. photos.attach(io: photo17, filename: 'singer2.jpg')
b6. photos.attach(io: photo18, filename: 'singer3.jpg')
b6.save!

b7 = Business.create!(name: "DataVision", address: "50 W 23rd St, New York, NY 10010", phone: "(888) 888-2087", website: "http://www.datavision.com/", hours: ["9:00am-8:00pm", "9:00am-8:00pm", "9:00am-8:00pm", "9:00am-8:00pm", "9:00am-8:00pm", "10:00am:7:00pm", "Closed"], rating: 0, tags: ["electronics", "audio", "computers"], latitude: 40.741926, longitude: -73.991910, category_id: bt5.id)

photo19 = open('https://ike-reloaded.s3.amazonaws.com/data1.jpg')
photo20 = open('https://ike-reloaded.s3.amazonaws.com/data2.jpg')
photo21 = open('https://ike-reloaded.s3.amazonaws.com/data3.jpg')
b7. photos.attach(io: photo19, filename: 'data1.jpg')
b7. photos.attach(io: photo20, filename: 'data2.jpg')
b7. photos.attach(io: photo21, filename: 'data3.jpg')
b7.save!

b8 = Business.create!(name: "New York Hardware & Locksmith", address: "130 W 37th St, New York, NY 10018", phone: "(212) 944-1811", website: "not available", hours: ["8:00am-6:00pm", "8:00am-6:00pm", "8:00am-6:00pm", "8:00am-6:00pm", "8:00am-3:00pm", "Closed", "Closed"], rating: 0, tags: ["hardware", "paint", "improvement"], latitude: 40.752248, longitude: -73.988352, category_id: bt6.id)

photo22 = open('https://ike-reloaded.s3.amazonaws.com/hardware1.jpg')
photo23 = open('https://ike-reloaded.s3.amazonaws.com/hardware2.jpg')
photo24 = open('https://ike-reloaded.s3.amazonaws.com/hardware3.jpg')
b8. photos.attach(io: photo22, filename: 'hardware1.jpg')
b8. photos.attach(io: photo23, filename: 'hardware2.jpg')
b8. photos.attach(io: photo24, filename: 'hardware3.jpg')
b8.save!

b9 = Business.create!(name: "727 Hardware Corporation", address: "328 8th Ave, New York, NY 10001", phone: "(212) 243-7995", website: "not available", hours: ["8:00am-6:30pm", "8:00am-6:30pm", "8:00am-6:30pm", "8:00am-6:30pm", "8:00am-6:30pm", "9:00am-5:00pm", "Closed"], rating: 0, tags: ["hardware", "paint", "improvement"], latitude: 40.747367, longitude: -73.996662, category_id: bt6.id)

photo25 = open('https://ike-reloaded.s3.amazonaws.com/hardcorp1.jpg')
photo26 = open('https://ike-reloaded.s3.amazonaws.com/hardcorp2.jpg')
photo27 = open('https://ike-reloaded.s3.amazonaws.com/hardcorp3.jpg')
b9. photos.attach(io: photo25, filename: 'hardcorp1.jpg')
b9. photos.attach(io: photo26, filename: 'hardcorp2.jpg')
b9. photos.attach(io: photo27, filename: 'hardcorp3.jpg')
b9.save!

b10 = Business.create!(name: "Scheman’s Bryant Park", address: "55 W 39th St, New York, NY 10018", phone: "(212) 398-0025", website: "http://www.schemanandgrant.com/", hours: ["7:30am-5:30pm", "7:30am-5:30pm", "7:30am-5:30pm", "7:30am-5:30pm", "7:30am-5:30pm", "8:00am-3:30pm", "Closed"], rating: 0, tags: ["hardware", "paint", "improvement"], latitude: 40.752843, longitude: -73.984794, category_id: bt6.id)

photo28 = open('https://ike-reloaded.s3.amazonaws.com/schem1.jpg')
photo29 = open('https://ike-reloaded.s3.amazonaws.com/schem2.jpg')
photo30 = open('https://ike-reloaded.s3.amazonaws.com/schem3.jpg')
b10. photos.attach(io: photo28, filename: 'schem1.jpg')
b10. photos.attach(io: photo29, filename: 'schem2.jpg')
b10. photos.attach(io: photo30, filename: 'schem3.jpg')
b10.save!

b11 = Business.create!(name: "The Home Depot", address: "40 W 23rd St, New York, NY 10010", phone: "(212) 929-9571", website: "http://www.homedepot.com/", hours: ["7:00am-10:00pm", "7:00am-10:00pm", "7:00am-8:00pm", "7:00am-10:00pm", "7:00am-10:00pm", "7:00am-10:00pm", "8:00am-8:00pm"], rating: 0, tags: ["hardware", "paint", "improvement"], latitude: 40.741848, longitude: -73.991359, category_id: bt6.id)

photo28 = open('https://ike-reloaded.s3.amazonaws.com/homed1.jpg')
photo29 = open('https://ike-reloaded.s3.amazonaws.com/homed2.jpg')
photo30 = open('https://ike-reloaded.s3.amazonaws.com/homed3.jpg')
b11. photos.attach(io: photo28, filename: 'homed1.jpg')
b11. photos.attach(io: photo29, filename: 'homed2.jpg')
b11. photos.attach(io: photo30, filename: 'homed3.jpg')
b11.save!

b12 = Business.create!(name: "Adco Security & Lock", address: "41 W 35th St, Manhattan, NY 10001", phone: "(212) 967-9500", website: "http://www.adcolocksmith.com/", hours: ["8:00am-6:00pm", "8:00am-6:00pm", "8:00am-6:00pm", "8:00am-6:00pm", "8:00am-6:00pm", "9:00am-6:00pm", "Closed"], rating: 0, tags: ["hardware", "paint", "improvement"], latitude: 40.749980, longitude: -73.985950, category_id: bt6.id)

photo31 = open('https://ike-reloaded.s3.amazonaws.com/adco1.jpg')
photo32 = open('https://ike-reloaded.s3.amazonaws.com/adco2.jpg')
photo33 = open('https://ike-reloaded.s3.amazonaws.com/adco3.jpg')
b12. photos.attach(io: photo31, filename: 'adco1.jpg')
b12. photos.attach(io: photo32, filename: 'adco2.jpg')
b12. photos.attach(io: photo33, filename: 'adco3.jpg')
b12.save!

b13 = Business.create!(name: "Mid City Gym", address: "345 W 42nd St, New York, NY 10036", phone: "(212) 757-0850", website: "http://www.midcitygym.com/", hours: ["5:00am-11:00pm", "5:00am-11:00pm", "5:00am-11:00pm", "5:00am-11:00pm", "5:00am-11:00pm", "8:00am-8:00pm", "8:00am-8:00pm"], rating: 0, tags: ["gyms", "trainers", "yoga"], latitude: 40.758271, longitude: -73.991497, category_id: bt1.id)

photo34 = open('https://ike-reloaded.s3.amazonaws.com/mid1.jpg')
photo35 = open('https://ike-reloaded.s3.amazonaws.com/mid2.jpg')
photo36 = open('https://ike-reloaded.s3.amazonaws.com/mid3.jpg')
b13. photos.attach(io: photo34, filename: 'mid1.jpg')
b13. photos.attach(io: photo35, filename: 'mid2.jpg')
b13. photos.attach(io: photo36, filename: 'mid3.jpg')
b13.save!

b14 = Business.create!(name: "Blink Penn Station", address: "127 W 30th St, New York, NY 10001", phone: "(212) 795-2795", website: "http://www.blinkfitness.com/", hours: ["5:00am-11:00pm", "5:00am-11:00pm", "5:00am-11:00pm", "5:00am-11:00pm", "5:00am-10:00pm", "7:00am-7:00pm", "7:00am-7:00pm"], rating: 0, tags: ["gyms", "trainers", "yoga"], latitude: 40.747925, longitude: -73.990926, category_id: bt1.id)

photo37 = open('https://ike-reloaded.s3.amazonaws.com/blink1.jpg')
photo38 = open('https://ike-reloaded.s3.amazonaws.com/blink2.jpg')
photo39 = open('https://ike-reloaded.s3.amazonaws.com/blink3.jpg')
b14. photos.attach(io: photo37, filename: 'blink1.jpg')
b14. photos.attach(io: photo38, filename: 'blink2.jpg')
b14. photos.attach(io: photo39, filename: 'blink3.jpg')
b14.save!

b15 = Business.create!(name: "Ludlow Fitness", address: "100 Delancey St, New York, NY 10002", phone: "(212) 260-9222", website: "http://www.ludlowfitness.com/", hours: ["5:30am-12:00am", "24 hours", "24 hours", "24 hours", "24 hours", "12:00am-9:00pm", "8:00am-9:00pm"], rating: 0, tags: ["gyms", "trainers", "yoga"], latitude: 40.719092, longitude: -73.988673, category_id: bt1.id)

photo37 = open('https://ike-reloaded.s3.amazonaws.com/ludlow1.jpg')
photo38 = open('https://ike-reloaded.s3.amazonaws.com/ludlow2.jpg')
photo39 = open('https://ike-reloaded.s3.amazonaws.com/ludlow3.jpg')
b15. photos.attach(io: photo37, filename: 'ludlow1.jpg')
b15. photos.attach(io: photo38, filename: 'ludlow2.jpg')
b15. photos.attach(io: photo39, filename: 'ludlow3.jpg')
b15.save!

b16 = Business.create!(name: "Inform Fitness", address: "201 E 56th St, Fl 2, New York, NY 10022", phone: "(212) 755-9895", website: "http://www.informfitness.com/", hours: ["6:00am-9:00pm", "6:00am-9:00pm", "6:00am-9:00pm", "6:00am-9:00pm", "6:00am-9:00pm", "6:00am-3:00pm", "Closed"], rating: 0, tags: ["gyms", "trainers", "yoga"], latitude: 40.719092, longitude: -73.988673, category_id: bt1.id)

photo40 = open('https://ike-reloaded.s3.amazonaws.com/inform1.jpg')
photo41 = open('https://ike-reloaded.s3.amazonaws.com/inform2.jpg')
photo42 = open('https://ike-reloaded.s3.amazonaws.com/inform3.jpg')
b16. photos.attach(io: photo40, filename: 'inform1.jpg')
b16. photos.attach(io: photo41, filename: 'inform2.jpg')
b16. photos.attach(io: photo42, filename: 'inform3.jpg')
b16.save!

b17 = Business.create!(name: "Nerai", address: "55 E 54th St  New York, NY 10022", phone: "(212) 759-5555", website: "http://www.nearinyc.com/", hours: ["7:30am-10:00pm", "7:30am-10:00pm", "7:30am-10:00pm", "7:30am-10:00pm", "7:30am-10:30pm", "5:00pm-10:30pm", "5:00pm-9:30pm"], rating: 0, tags: ["mediteranean", "seafood", "greek"], latitude: 40.760244, longitude: -73.973086, category_id: bt2.id)

photo43 = open('https://ike-reloaded.s3.amazonaws.com/nerai1.jpg')
photo44 = open('https://ike-reloaded.s3.amazonaws.com/nerai2.jpg')
photo45 = open('https://ike-reloaded.s3.amazonaws.com/nerai3.jpg')
b17. photos.attach(io: photo43, filename: 'nerai1.jpg')
b17. photos.attach(io: photo44, filename: 'nerai2.jpg')
b17. photos.attach(io: photo45, filename: 'nerai3.jpg')
b17.save!

b18 = Business.create!(name: "Phyt NYC", address: "139 E 57th St , Fl 5, New York, NY 10022", phone: "(212) 688-7498", website: "http://www.phytnyc.com/", hours: ["6:00am-9:00pm", "6:00am-9:00pm", "6:00am-9:00pm", "6:00am-9:00pm", "6:00am-8:00pm", "9:00am-6:00pm", "10:00am-6:00pm"], rating: 0, tags: ["gyms", "trainers", "yoga"], latitude: 40.761003, longitude: -73.968793, category_id: bt1.id)

photo46 = open('https://ike-reloaded.s3.amazonaws.com/phyt1.jpg')
photo47 = open('https://ike-reloaded.s3.amazonaws.com/phyt2.jpg')
photo48 = open('https://ike-reloaded.s3.amazonaws.com/phyt3.jpg')
b18. photos.attach(io: photo46, filename: 'phyt1.jpg')
b18. photos.attach(io: photo47, filename: 'phyt2.jpg')
b18. photos.attach(io: photo48, filename: 'phyt3.jpg')
b18.save!

b19 = Business.create!(name: "Allora Ristorante", address: "145 E 47th St , New York, NY 10017", phone: "(212) 754-9800", website: "http://www.alloranyc.com/", hours: ["7:00am-11:00pm", "7:00am-11:00pm", "7:00am-11:00pm", "7:00am-11:00pm", "7:00am-11:00pm", "7:00am-11:00pm", "7:00am-11:00pm"], rating: 0, tags: ["italian", "bars", "pasta"], latitude: 40.754432, longitude: -73.972685, category_id: bt2.id)

photo49 = open('https://ike-reloaded.s3.amazonaws.com/allora1.jpg')
photo50 = open('https://ike-reloaded.s3.amazonaws.com/allora2.jpg')
photo51 = open('https://ike-reloaded.s3.amazonaws.com/allora3.jpg')
b19. photos.attach(io: photo49, filename: 'allora1.jpg')
b19. photos.attach(io: photo50, filename: 'allora2.jpg')
b19. photos.attach(io: photo51, filename: 'allora3.jpg')
b19.save!

b20 = Business.create!(name: "The Sea Fire Grill", address: "158 E 48th St , New York, NY 10017", phone: "(212) 935-3785", website: "http://www.theseafiregrill.com/", hours: ["11:30am-10:30pm", "11:30am-10:30pm", "11:30am-10:30pm", "11:30am-10:30pm", "11:30am-10:30pm", "5:00pm-10:30pm", "5:00pm-10:30pm"], rating: 0, tags: ["steakhouses", "bars", "seafood"], latitude: 40.754692, longitude: -73.972222, category_id: bt2.id)

photo52 = open('https://ike-reloaded.s3.amazonaws.com/seafire1.jpg')
photo53 = open('https://ike-reloaded.s3.amazonaws.com/seafire2.jpg')
photo54 = open('https://ike-reloaded.s3.amazonaws.com/seafire3.jpg')
b20. photos.attach(io: photo52, filename: 'seafire1.jpg')
b20. photos.attach(io: photo53, filename: 'seafire2.jpg')
b20. photos.attach(io: photo54, filename: 'seafire3.jpg')
b20.save!

b21 = Business.create!(name: "Amelie", address: "22 W 8th St ,  New York, NY 10011", phone: "(212) 533-2962", website: "http://www.ameliewinebar.com/", hours: ["5:00pm-11:30pm", "11:30am-11:30pm", "11:30am-11:30pm", "11:30am-11:30pm", "11:30am-1:30am", "11:30am-1:30am", "11:00am-11:30pm"], rating: 0, tags: ["french", "bars", "steakhouses"], latitude: 40.732629, longitude: -73.997668, category_id: bt2.id)

photo55 = open('https://ike-reloaded.s3.amazonaws.com/amelie1.jpg')
photo56 = open('https://ike-reloaded.s3.amazonaws.com/amelie2.jpg')
photo57 = open('https://ike-reloaded.s3.amazonaws.com/amelie3.jpg')
b21. photos.attach(io: photo55, filename: 'amelie1.jpg')
b21. photos.attach(io: photo56, filename: 'amelie2.jpg')
b21. photos.attach(io: photo57, filename: 'amelie3.jpg')
b21.save!

b22 = Business.create!(name: "Havana Social - Hell’s Kitchen", address: "688 10th Ave,  New York, NY 10019", phone: "(212) 956-2155", website: "not available", hours: ["3:00pm-12:00am", "3:00pm-12:00am", "3:00pm-12:00am", "3:00pm-12:00am", "3:00pm-2:00am", "11:00am-2:00am", "11:00am-12:00am"], rating: 0, tags: ["cuban", "bars", "tapas"], latitude: 40.763460, longitude: -73.992300, category_id: bt2.id)

photo58 = open('https://ike-reloaded.s3.amazonaws.com/havana1.jpg')
photo59 = open('https://ike-reloaded.s3.amazonaws.com/havana2.jpg')
photo60 = open('https://ike-reloaded.s3.amazonaws.com/havana3.jpg')
b22. photos.attach(io: photo58, filename: 'havana1.jpg')
b22. photos.attach(io: photo59, filename: 'havana2.jpg')
b22. photos.attach(io: photo60, filename: 'havana3.jpg')
b22.save!

b23 = Business.create!(name: "Ocean Prime", address: "123 W 52nd St,  New York, NY 10019", phone: "(212) 956-1404", website: "https://www.ocean-prime.com", hours: ["11:30am-10:00pm", "11:30am-10:00pm", "11:30am-10:00pm", "11:30am-10:00pm", "11:30am-10:00pm", "5:00pm-10:00am", "5:00pm-9:00pm"], rating: 0, tags: ["seafood", "bars", "steakhouses"], latitude: 40.761847, longitude: -73.980545, category_id: bt2.id)

photo61 = open('https://ike-reloaded.s3.amazonaws.com/ocean1.jpg')
photo62 = open('https://ike-reloaded.s3.amazonaws.com/ocean2.jpg')
photo63 = open('https://ike-reloaded.s3.amazonaws.com/ocean3.jpg')
b23. photos.attach(io: photo61, filename: 'ocean1.jpg')
b23. photos.attach(io: photo62, filename: 'ocean2.jpg')
b23. photos.attach(io: photo63, filename: 'ocean3.jpg')
b23.save!

b24 = Business.create!(name: "Pierre Loti Midtown", address: "300 E 52nd St,  New York, NY 10022", phone: "(212) 755-5684", website: "https://www.midtown.pierrelotiwinebar.com", hours: ["12:00pm-12:00am", "12:00pm-12:00am", "12:00pm-12:00am", "12:00pm-12:00am", "12:00pm-2:00am", "3:00pm-2:00am", "3:00pm-12:00am"], rating: 0, tags: ["mediteranean", "bars", "tapas"], latitude: 40.755913, longitude: -73.967415, category_id: bt2.id)

photo64 = open('https://ike-reloaded.s3.amazonaws.com/pierre1.jpg')
photo65 = open('https://ike-reloaded.s3.amazonaws.com/pierre2.jpg')
photo66 = open('https://ike-reloaded.s3.amazonaws.com/pierre3.jpg')
b24. photos.attach(io: photo64, filename: 'pierre1.jpg')
b24. photos.attach(io: photo65, filename: 'pierre2.jpg')
b24. photos.attach(io: photo66, filename: 'pierre3.jpg')
b24.save!

b25 = Business.create!(name: "Buenos Aires", address: "513 E 6th St, New York, NY 10009", phone: "(212) 228-2775", website: "https://www.buenosairesnyc.com", hours: ["12:00pm-11:00pm", "12:00pm-11:00pm", "12:00pm-11:00pm", "12:00pm-11:00pm", "12:00pm-12:00am", "12:00pm-12:00am", "12:00pm-11:00pm"], rating: 0, tags: ["argentinian", "steakhouses", "tapas"], latitude: 40.725275, longitude: -73.983060, category_id: bt2.id)

photo67 = open('https://ike-reloaded.s3.amazonaws.com/buenos1.jpg')
photo68 = open('https://ike-reloaded.s3.amazonaws.com/buenos2.jpg')
photo69 = open('https://ike-reloaded.s3.amazonaws.com/buenos3.jpg')
b25. photos.attach(io: photo67, filename: 'buenos1.jpg')
b25. photos.attach(io: photo68, filename: 'buenos2.jpg')
b25. photos.attach(io: photo69, filename: 'buenos3.jpg')
b25.save!

b26 = Business.create!(name: "Non Solo Piada", address: "302 W 37th St, New York, NY 10018", phone: "(212) 216-0616", website: "https://www.nonsolopiadanyc.com", hours: ["7:00am-8:00pm", "7:00am-8:00pm", "7:00am-8:00pm", "7:00am-8:00pm", "7:00am-8:00pm", "8:00am-4:00pm", "8:00am-4:00pm"], rating: 0, tags: ["italian", "bars", "pasta"], latitude: 40.754091, longitude: -73.992504, category_id: bt2.id)

photo70 = open('https://ike-reloaded.s3.amazonaws.com/nonsolo1.jpg')
photo71 = open('https://ike-reloaded.s3.amazonaws.com/nonsolo2.jpg')
photo72 = open('https://ike-reloaded.s3.amazonaws.com/nonsolo3.jpg')
b26. photos.attach(io: photo70, filename: 'nonsolo1.jpg')
b26. photos.attach(io: photo71, filename: 'nonsolo2.jpg')
b26. photos.attach(io: photo72, filename: 'nonsolo3.jpg')
b26.save!

b27 = Business.create!(name: "Blue Hill", address: "75 Washington Pl, New York, NY 10011", phone: "(212) 823-9335", website: "https://www.bluehillfarm.com/dine/newyork", hours: ["5:00-11:00pm", "5:00-11:00pm", "5:00-11:00pm", "5:00-11:00pm", "5:00-11:00pm", "5:00pm-11:00pm", "5:00pm-11:00pm"], rating: 0, tags: ["american", "bars", "steakhouses"], latitude: 40.732054, longitude: -73.999680, category_id: bt2.id)

photo73 = open('https://ike-reloaded.s3.amazonaws.com/blue1.jpg')
photo74 = open('https://ike-reloaded.s3.amazonaws.com/blue2.jpg')
photo75 = open('https://ike-reloaded.s3.amazonaws.com/blue3.jpg')
b27. photos.attach(io: photo73, filename: 'blue1.jpg')
b27. photos.attach(io: photo74, filename: 'blue2.jpg')
b27. photos.attach(io: photo75, filename: 'blue3.jpg')
b27.save!

b28 = Business.create!(name: "Whiskers Holistic Pet Store", address: "235 E 9th St , New York, NY 10003", phone: "(212) 979-2532", website: "https://www.1800whiskers.com/", hours: ["11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm", "11:00am-7:00pm", "12:00pm-6:00pm"], rating: 0, tags: ["toys", "food", "pets"], latitude: 40.729438, longitude: -73.987552, category_id: bt4.id)

photo76 = open('https://ike-reloaded.s3.amazonaws.com/whiskers1.jpg')
photo77 = open('https://ike-reloaded.s3.amazonaws.com/whiskers2.jpg')
photo78 = open('https://ike-reloaded.s3.amazonaws.com/whiskers3.jpg')
b28. photos.attach(io: photo76, filename: 'whiskers1.jpg')
b28. photos.attach(io: photo77, filename: 'whiskers2.jpg')
b28. photos.attach(io: photo78, filename: 'whiskers3.jpg')
b28.save!

b29 = Business.create!(name: "Spoiled Brats", address: "340 W 49th St, New York, NY 10019", phone: "(212) 459-1615", website: "not available", hours: ["10:00am-9:00pm", "10:00am-9:00pm", "10:00am-9:00pm", "10:00am-10:00pm", "10:00am-10:00pm", "10:00am-10:00pm", "12:00pm-7:30pm"], rating: 0, tags: ["toys", "food", "pets"], latitude: 40.762339, longitude: -73.988685, category_id: bt4.id)

photo79 = open('https://ike-reloaded.s3.amazonaws.com/brats1.jpg')
photo80 = open('https://ike-reloaded.s3.amazonaws.com/brats2.jpg')
photo81 = open('https://ike-reloaded.s3.amazonaws.com/brats3.jpg')
b29. photos.attach(io: photo79, filename: 'brats1.jpg')
b29. photos.attach(io: photo80, filename: 'brats2.jpg')
b29. photos.attach(io: photo81, filename: 'brats3.jpg')
b29.save!

b30 = Business.create!(name: "Precious Pets", address: "895 1st Ave, New York, NY 10022", phone: "(212) 459-1615", website: "https://www.preciouspetsnyc.com/", hours: ["7:00am-7:00pm", "7:00am-7:00pm", "7:00am-7:00pm", "7:00am-7:00pm", "7:00am-7:00pm", "9:00am-5:00pm", "Closed"], rating: 0, tags: ["toys", "food", "pets"], latitude: 40.754231, longitude: -73.966160, category_id: bt4.id)

photo82 = open('https://ike-reloaded.s3.amazonaws.com/pets1.jpg')
photo83 = open('https://ike-reloaded.s3.amazonaws.com/pets2.jpg')
photo84 = open('https://ike-reloaded.s3.amazonaws.com/pets3.jpg')
b30. photos.attach(io: photo82, filename: 'pets1.jpg')
b30. photos.attach(io: photo83, filename: 'pets2.jpg')
b30. photos.attach(io: photo84, filename: 'pets3.jpg')
b30.save!

b31 = Business.create!(name: "Pet Health Store", address: "473 Amsterdam Ave, New York, NY 10024", phone: "(212) 595-4200", website: "https://www.pethealthstore.com/", hours: ["10:00am-7:30pm", "10:00am-7:30pm", "10:00am-7:30pm", "10:00am-7:30pm", "10:00am-7:00pm", "10:00am-6:00pm", "11:00am-6:00pm"], rating: 0, tags: ["toys", "food", "pets"], latitude: 40.785419, longitude: -73.976433, category_id: bt4.id)

photo82 = open('https://ike-reloaded.s3.amazonaws.com/petsh1.jpg')
photo83 = open('https://ike-reloaded.s3.amazonaws.com/petsh2.jpg')
photo84 = open('https://ike-reloaded.s3.amazonaws.com/petsh3.jpg')
b31. photos.attach(io: photo82, filename: 'petsh1.jpg')
b31. photos.attach(io: photo83, filename: 'petsh2.jpg')
b31. photos.attach(io: photo84, filename: 'petsh3.jpg')
b31.save!

b32 = Business.create!(name: "Little Paws NYC", address: "20 Clinton St, New York, NY 10002", phone: "(212) 777-7723", website: "not available", hours: ["10:00am-8:30pm", "10:00am-8:30pm", "10:00am-8:30pm", "10:00am-8:30pm", "10:00am-8:00pm", "10:00am-8:30pm", "10:00am-7:00pm"], rating: 0, tags: ["toys", "food", "pets"], latitude: 40.720696, longitude: -73.984059, category_id: bt4.id)

photo85 = open('https://ike-reloaded.s3.amazonaws.com/paws1.jpg')
photo86 = open('https://ike-reloaded.s3.amazonaws.com/paws2.jpg')
photo87 = open('https://ike-reloaded.s3.amazonaws.com/paws3.jpg')
b32. photos.attach(io: photo85, filename: 'paws1.jpg')
b32. photos.attach(io: photo86, filename: 'paws2.jpg')
b32. photos.attach(io: photo87, filename: 'paws3.jpg')
b32.save!

b33 = Business.create!(name: "Petropolis", address: "91 Washington St, New York, NY 10006", phone: "(212) 608-2234", website: "https://www.petropolisnyc.com/", hours: ["11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm", "10:00am-6:00pm", "11:00am-5:00pm"], rating: 0, tags: ["toys", "food", "pets"], latitude: 40.707995, longitude: -73.014357, category_id: bt4.id)

photo88 = open('https://ike-reloaded.s3.amazonaws.com/petro1.jpg')
photo89 = open('https://ike-reloaded.s3.amazonaws.com/petro2.jpg')
photo90 = open('https://ike-reloaded.s3.amazonaws.com/petro3.jpg')
b33. photos.attach(io: photo88, filename: 'petro1.jpg')
b33. photos.attach(io: photo89, filename: 'petro2.jpg')
b33. photos.attach(io: photo90, filename: 'petro3.jpg')
b33.save!

b34 = Business.create!(name: "T-Gardens New York Hair Salon", address: "328E 59th St, New York, NY 10022", phone: "(212) 836-9283", website: "https://www.t-gardens.com/", hours: ["8:00am-8:00pm", "8:00am-8:00pm", "8:00am-8:00pm", "8:00am-8:00pm", "8:00am-8:00pm", "8:00am-8:00pm", "8:00am-8:00pm"], rating: 0, tags: ["hair", "salons", "makeup"], latitude: 40.759881, longitude: -73.963169, category_id: bt3.id)

photo91 = open('https://ike-reloaded.s3.amazonaws.com/gard1.jpg')
photo92 = open('https://ike-reloaded.s3.amazonaws.com/gard2.jpg')
photo93 = open('https://ike-reloaded.s3.amazonaws.com/gard3.jpg')
b34. photos.attach(io: photo91, filename: 'gard1.jpg')
b34. photos.attach(io: photo92, filename: 'gard2.jpg')
b34. photos.attach(io: photo93, filename: 'gard3.jpg')
b34.save!

b35 = Business.create!(name: "Studio B Hair", address: "132 E 61st St, Fl 2, New York, NY 10065", phone: "(212) 836-9283", website: "https://www.studiobnyc.com/", hours: ["Closed", "10:00am-9:00pm", "9:30am-7:00pm", "10:00am-9:00pm", "9:30am-7:00pm", "9:30am-6:00pm", "Closed"], rating: 0, tags: ["hair", "salons", "makeup"], latitude: 40.763466, longitude: -73.967817, category_id: bt3.id)

photo94 = open('https://ike-reloaded.s3.amazonaws.com/studio1.jpg')
photo95 = open('https://ike-reloaded.s3.amazonaws.com/studio2.jpg')
photo96 = open('https://ike-reloaded.s3.amazonaws.com/studio3.jpg')
b35. photos.attach(io: photo94, filename: 'studio1.jpg')
b35. photos.attach(io: photo95, filename: 'studio2.jpg')
b35. photos.attach(io: photo96, filename: 'studio3.jpg')
b35.save!

b36 = Business.create!(name: "&Hair Lounge", address: "335 E 9th St, New York, NY 10003", phone: "(212) 966-2066", website: "not available", hours: ["10:00am-8:00pm", "10:00am-8:00pm", "10:00am-8:00pm", "10:00am-8:00pm", "10:00am-8:00pm", "10:00am-8:00pm", "10:00am-8:00pm"], rating: 0, tags: ["hair", "salons", "makeup"], latitude: 40.728670, longitude: -73.985600, category_id: bt3.id)

photo97 = open('https://ike-reloaded.s3.amazonaws.com/hair1.jpg')
photo98 = open('https://ike-reloaded.s3.amazonaws.com/hair2.jpg')
photo99 = open('https://ike-reloaded.s3.amazonaws.com/hair3.jpg')
b36. photos.attach(io: photo97, filename: 'hair1.jpg')
b36. photos.attach(io: photo98, filename: 'hair2.jpg')
b36. photos.attach(io: photo99, filename: 'hair3.jpg')
b36.save!

b37 = Business.create!(name: "Bianchi Salon", address: "164 Allen St, New York, NY 10002", phone: "(646) 455-3779", website: "https://www.bianchisalon.com/", hours: ["11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm"], rating: 0, tags: ["hair", "salons", "makeup"], latitude: 40.721058, longitude: -73.989078, category_id: bt3.id)

photo100 = open('https://ike-reloaded.s3.amazonaws.com/bianchi1.jpg')
photo101 = open('https://ike-reloaded.s3.amazonaws.com/bianchi2.jpg')
photo102 = open('https://ike-reloaded.s3.amazonaws.com/bianchi3.jpg')
b37. photos.attach(io: photo100, filename: 'bianchi1.jpg')
b37. photos.attach(io: photo101, filename: 'bianchi2.jpg')
b37. photos.attach(io: photo102, filename: 'bianchi3.jpg')
b37.save!

b38 = Business.create!(name: "Fox & Jane Salon East Village", address: "277 E 10th St, New York, NY 10009", phone: "(646) 688-3643", website: "https://www.foxandjanesalon.com/", hours: ["11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm", "11:00am-8:00pm", "11:00am-7:00pm", "11:00am-8:00pm"], rating: 0, tags: ["hair", "salons", "makeup"], latitude: 40.728287, longitude: -73.982699, category_id: bt3.id)

photo103 = open('https://ike-reloaded.s3.amazonaws.com/fox1.jpg')
photo104 = open('https://ike-reloaded.s3.amazonaws.com/fox2.jpg')
photo105 = open('https://ike-reloaded.s3.amazonaws.com/fox3.jpg')
b38. photos.attach(io: photo103, filename: 'fox1.jpg')
b38. photos.attach(io: photo104, filename: 'fox2.jpg')
b38. photos.attach(io: photo105, filename: 'fox3.jpg')
b38.save!
