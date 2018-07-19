@business_types.each do |type|
  json.set! type.id do
    json.extract! type, :id, :name
    json.businessIds type.businesses.ids
  end
end
