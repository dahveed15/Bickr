# == Schema Information
#
# Table name: comments
#
#  id           :integer          not null, primary key
#  user_id      :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  photo_id     :integer
#  body         :string
#  comment_user :string
#

require 'test_helper'

class CommentTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
