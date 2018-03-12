json.partial! "api/comments/comment", comment: @comment
json.extract! @comment, :id, :body, :comment_user
