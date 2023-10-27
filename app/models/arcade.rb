class Arcade < ApplicationRecord
    has_many :reviews
    has_many :users, through: :reviews

    validates :name, presence: true
    validates :img_url, presence: true
    validates :num_of_games, numericality: {only_integer: true}
end
