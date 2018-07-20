json.business do
  json.extract! business, :id, :name, :address, :hours, :phone, :website, :latitude, :longitude, :rating
  json.businessType business.business_type.name
  json.photos business.photos.map { |photo| url_for(photo) }
  json.reviewIds business.reviews.ids
end

json.reviews do
  business.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :body, :rating, :id
      json.userName review.user.first_name
      json.businessId review.business_id
    end
  end
end
