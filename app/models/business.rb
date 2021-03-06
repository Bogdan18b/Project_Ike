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
#  category_id      :integer          not null
#  created_at       :datetime         not null
#  updated_at       :datetime         not null
#  hours            :string           default([]), is an Array
#  rating           :integer
#

class Business < ApplicationRecord
  validates :name, :address, :hours, :phone, :website, :latitude, :longitude, presence: true
  validates :name, uniqueness: true

  has_many_attached :photos

  belongs_to :category,
  foreign_key: :category_id,
  class_name: :Category

  has_many :reviews,
  foreign_key: :business_id,
  class_name: :Review

  def rating
    ratings = []
    self.reviews.each do |review|
      ratings << review.rating
    end
    rating = (ratings.reduce(:+)) / ratings.length unless ratings.empty?
    return rating || 0
  end

    def matches?(input)
    self.name.downcase.include?(input.downcase)
    end

end
