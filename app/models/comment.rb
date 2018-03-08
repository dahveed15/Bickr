# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  photo_id   :integer
#  body       :string
#

class Comment < ApplicationRecord
  validates :body, :photo_id, :user_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  belongs_to :photo,
  primary_key: :id,
  foreign_key: :photo_id,
  class_name: :Photo
end
