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

require 'test_helper'

class BreweryTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
