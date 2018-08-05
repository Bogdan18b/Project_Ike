json.review do
    json.extract! @review, :id, :body, :rating
    json.userId @review.user_id
    json.businessId @review.business_id
    json.createdAt @review.created_at
end

json.user do
    json.extract! @review.user, :email, :id
    json.firstName @review.user.first_name
    json.lastName @review.user.last_name
end
