import * as CommentApiUtil from '../util/comment_api_util';

// export const CREATE_COMMENT = "CREATE_COMMENT"
export const REMOVE_COMMENT = "REMOVE_COMMENT";



const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

// export const createComment = (photoId, body, commentUser) => {
//   return CommentApiUtil.createComment(photoId, body, commentUser);
// };

export const deleteComment = (commentId) => dispatch => {
  return CommentApiUtil.deleteComment(commentId)
  .then(() => dispatch(removeComment(commentId)));
};
