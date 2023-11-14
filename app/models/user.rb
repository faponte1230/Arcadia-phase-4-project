class User < ApplicationRecord
    has_secure_password
    has_many :reviews
    has_many :arcades, through: :reviews 
    
    validates :username, presence: true
end
