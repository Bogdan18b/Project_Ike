@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :body, :rating, :id
    json.userName review.user.first_name
    json.businessName review.business.name
    json.businessId review.business_id
  end
end
