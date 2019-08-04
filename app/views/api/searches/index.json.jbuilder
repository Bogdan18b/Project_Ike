json.businesses do
  json.array! @businesses.pluck(:id)
end

json.categories do
  json.array! @categories.pluck(:id)
end
