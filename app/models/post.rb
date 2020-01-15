# == Schema Information
#
# Table name: posts
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  body       :text             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Post < ApplicationRecord
  validates :title, :body, :user_id, presence: true
  validates :title, length: { minimum: 6, maximum: 20 }
  validates :title, :body, length: { minimum: 6 }
  validates :title, length: { minimum: 6, maximum: 30 }

  belongs_to :user
end
