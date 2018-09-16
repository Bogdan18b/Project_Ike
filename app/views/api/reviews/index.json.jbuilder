json.reviews do
    @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :body, :rating, :id
      json.createdAt review.created_at
      json.userId review.user_id
      json.businessId review.business_id
    end
  end
end

json.users do
  @reviews.each do |review|
    json.set! review.user.id do
      json.extract! review.user, :email, :id
      json.firstName review.user.first_name
      json.lastName review.user.last_name
    end
  end
end

json.businesses Review.get_business_ids
# json.businesses do
#   @reviews.each do |review|
#     json.set! review.business.id do
#       json.extract! review.business, :id, :name, :phone, :website, :hours, :latitude, :longitude, :rating, :address
#       json.businessType review.business.business_type.name
#       json.photoURL url_for(review.business.photos.first)
#       json.reviewIds review.business.reviews.ids
#     end
#   end
# end
