# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  username        :string           not null
#

class User < ApplicationRecord
  validates :email, :username, :password_digest, :session_token, presence: true
  validates :email, :username, uniqueness: true
  validates :password, length: { minimum: 6, maxinum: 10 }, allow_nil: true
  validates :password, length: { maximum: 20 }
  validates :username, :email, length: { minimum: 6 }
  validates :username, length: { maximum: 20 }
  validates :email, length: { maximum: 20 }
  
  attr_reader :password
  before_validation :ensure_session_token
  has_many :favorites

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end
end
