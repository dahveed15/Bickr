require 'test_helper'

class Api::ExploresControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_explores_index_url
    assert_response :success
  end

end
