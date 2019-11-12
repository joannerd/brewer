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

require 'test_helper'

class BreweryGuideTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
