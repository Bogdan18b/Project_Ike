json.business do
  json.extract! business, :id, :name, :address, :hours, :phone, :website, :latitude, :longitude, :rating
  json.businessTypeId business.business_type_id
  json.photos business.photos.map { |photo| url_for(photo) }
  json.reviewIds business.reviews.ids
end

json.reviews do
  business.reviews.each do |review|
    json.set! review.id do
      json.extract! review, :body, :rating, :id
      json.businessId review.business_id
      json.userId review.user_id
      json.createdAt review.created_at
    end
  end
end

json.users do
  business.reviews.each do |review|
    json.set! review.user.id do
      json.extract! review.user, :email, :id
      json.firstName review.user.first_name
      json.lastName review.user.last_name
    end
  end
end
