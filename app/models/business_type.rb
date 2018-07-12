# == Schema Information
#
# Table name: business_types
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BusinessType < ApplicationRecord
  validates :name, presence: true

  has_many :businesses,
  foreign_key: :business_type_id,
  class_name: :Business
end
