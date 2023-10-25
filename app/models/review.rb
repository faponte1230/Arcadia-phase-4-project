class Review < ApplicationRecord
    belongs_to :user
    belongs_to :arcade 

    validates :body, presence: true
end
