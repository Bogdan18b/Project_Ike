  json.extract! @business, :id, :name, :address, :hours, :phone, :website, :latitude, :longitude, :rating
  json.businessType @business.business_type.name

json.photos do
  json.array! (@business.photos) do |photo|
    json.photoURL url_for(photo)
  end
end
json.reviews do

@business.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :body, :rating, :id
      json.userName review.user.first_name
    end
  end
end
