# == Schema Information
#
# Table name: breweries
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  lat         :float            not null
#  lng         :float            not null
#  address     :string           not null
#  website     :string           not null
#  city_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  description :text
#

class Brewery < ApplicationRecord
  validates :name, :lat, :lng, :address, :website, :city_id, presence: true
  validates :name, uniqueness: true

  has_one_attached :photo

  belongs_to :city
  has_many :favorites
  has_many :brewery_guides
  has_many :guides,
    through: :brewery_guides,
    source: :guide
end
