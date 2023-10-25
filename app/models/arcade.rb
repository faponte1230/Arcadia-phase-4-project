class Arcade < ApplicationRecord
    has_many :users
    has_many :reviews, through: :users

    validates :name, presence: true
    validates :img_url, presence: true
    validates :num_of_games, numericality: {only_integer: true}
end
