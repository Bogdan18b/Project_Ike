# == Schema Information
#
# Table name: businesses
#
#  id               :bigint(8)        not null, primary key
#  name             :string           not null
#  address          :string           not null
#  phone            :string           not null
#  website          :string           not null
#  latitude         :float            not null
#  longitude        :float            not null
#  business_type_id :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  hours            :string           default([]), is an Array
#

class Business < ApplicationRecord
  validates :name, :address, :hours, :phone, :website, :latitude, :longitude, presence: true
  validates :name, uniqueness: true

  has_many_attached :photos

  belongs_to :business_type,
  foreign_key: :business_type_id,
  class_name: :BusinessType

end
