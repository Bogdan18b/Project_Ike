json.reviews do
    @reviews.each do |review|
    json.set! review.id do
      json.extract! review, :body, :rating, :id
      json.userName review.user.first_name
      json.businessId review.business_id
    end
  end
end

json.users do
  @reviews.each do |review|
    json.set! review.user.id do
      json.extract! review.user, :first_name, :last_name, :email, :id
    end
  end
end

json.businesses do
  @reviews.each do |review|
    json.set! review.business.id do
      json.extract! review.business, :id, :name, :phone, :website, :hours, :latitude, :longitude, :rating, :address
      json.businessType review.business.business_type.name
      json.photoURL url_for(review.business.photos.first)
      json.reviewIds review.business.reviews.ids
    end
  end
end
