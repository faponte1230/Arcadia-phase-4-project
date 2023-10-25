class UserSerializer < ActiveModel::Serializer
  attributes :id, :username
  has_many :arcades, through: :reviews
end
