@businesses.each do |business|
  json.set! business.id do
    json.extract! business, :id, :name, :phone, :website, :hours, :latitude, :longitude, :rating
    json.businessType business.business_type.name
  end
end
