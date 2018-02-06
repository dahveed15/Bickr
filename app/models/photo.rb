# == Schema Information
#
# Table name: photos
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  album_id   :integer
#  img_url    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Photo < ApplicationRecord
  validates :img_url, :album_id, presence: true

  belongs_to :album,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: :Album

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User


  # has_many :comments, as: :imageable_type
end
