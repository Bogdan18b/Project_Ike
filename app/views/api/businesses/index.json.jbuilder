@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :name, :phone, :website, :hours, :latitude, :longitude, :rating, :address
    json.businessTypeId business.business_type_id
    json.photoURL url_for(business.photos.first)
    json.reviewIds business.reviews.ids
  end
end
