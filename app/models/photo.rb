class Photo < ApplicationRecord
  validates :img_url, presence: true

  # belongs_to :user,
  # primary_key: :id,
  # foreign_key: :user_id,
  # class_name: :User
  #
  # has_many :comments, as: :imageable_type
end
