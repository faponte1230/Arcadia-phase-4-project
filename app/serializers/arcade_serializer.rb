class ArcadeSerializer < ActiveModel::Serializer
  attributes :id, :name ,:num_of_games, :img_url
  
  has_many :users, through: :reviews
  has_many :reviews
  
end
