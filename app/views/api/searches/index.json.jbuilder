json.businesses do
  json.array! @businesses.pluck(:id)
end

json.businessTypes do
  json.array! @business_types.pluck(:id)
end
