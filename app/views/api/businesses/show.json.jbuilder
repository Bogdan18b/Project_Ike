  json.extract! @business, :id, :name, :address, :hours, :phone, :website, :latitude, :longitude, :rating
  json.businessType @business.business_type.name

json.photos do
  json.array! (@business.photos) do |photo|
    json.photoURL url_for(photo)
  end
end
