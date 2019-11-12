# == Schema Information
#
# Table name: brewery_guides
#
#  id         :integer          not null, primary key
#  brewery_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  guide_id   :integer
#  order      :integer
#

class BreweryGuide < ApplicationRecord
  validates :brewery_id, :guide_id, :order, presence: true
  
  belongs_to :brewery
  belongs_to :guide
end
