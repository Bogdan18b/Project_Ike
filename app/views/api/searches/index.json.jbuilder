json.businesses do
    @businesses.each do |business|
      json.set! business.id do
        json.extract! business, :id, :name, :address, :hours, :phone, :website, :latitude, :longitude, :rating
        json.businessType business.business_type.name
        json.photos business.photos.map { |photo| url_for(photo) }
        json.reviewIds business.reviews.ids
      end
    end
  end

  json.types do
    @business_types.each do |type|
      json.set! type.id do
        json.extract! type, :id, :name
        json.businessIds type.businesses.ids
      end
    end
  end
