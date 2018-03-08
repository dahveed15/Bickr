# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  user_id    :integer
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Album < ApplicationRecord
  validates :name, :user_id, presence: true

  belongs_to :user,
  primary_key: :id,
  foreign_key: :user_id,
  class_name: :User

  #destroy photos if album is destroyed
  has_many :photos,
  primary_key: :id,
  foreign_key: :album_id,
  class_name: :Photo,
  dependent: :destroy

end
