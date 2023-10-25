class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_id, :arcade_id, :username

  def username
    object.user.username
  end
end
