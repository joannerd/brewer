# == Schema Information
#
# Table name: guides
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  city_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Guide < ApplicationRecord
  validates :title, :body, :city_id, presence: true
  validates :title, uniqueness: true

  belongs_to :city
  has_many :brewery_guides
  has_many :breweries,
    through: :brewery_guides,
    source: :brewery
end
