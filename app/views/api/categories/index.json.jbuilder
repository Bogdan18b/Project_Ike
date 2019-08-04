@categories.each do |category|
  json.set! category.id do
    json.extract! category, :id, :name
    json.businessIds category.businesses.ids
  end
end
