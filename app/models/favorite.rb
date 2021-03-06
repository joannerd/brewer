# == Schema Information
#
# Table name: favorites
#
#  id         :integer          not null, primary key
#  user_id    :integer          not null
#  brewery_id :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Favorite < ApplicationRecord
  validates :user_id, :brewery_id, presence: true
  validates :user_id, uniqueness: { scope: :brewery_id, message: "Each user should only favorite a brewery once" }

  belongs_to :user
  belongs_to :brewery
end
