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
#  user_id    :integer
#

require 'test_helper'

class GuideTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
