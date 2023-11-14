class Review < ApplicationRecord
    belongs_to :user
    belongs_to :arcade 

    validates :body, presence: true
    validates :user_id, uniqueness: {scope: :arcade_id, message: "Only one review per arcade!"}
end
