# == Schema Information
#
# Table name: brewery_guides
#
#  id         :integer          not null, primary key
#  brewery_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  guide_id   :integer
#

class BreweryGuide < ApplicationRecord
  belongs_to :brewery
  belongs_to :guide
end
