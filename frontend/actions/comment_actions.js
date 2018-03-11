import * as CommentApiUtil from '../util/comment_api_util';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveAllComments = comments => {
  return {
    type: RECEIVE_ALL_COMMENTS,
    comments
  };
};

const receiveComment = comment => {
  return {
    type: RECEIVE_COMMENT,
    comment
  };
};

const removeComment = commentId => {
  return {
    type: REMOVE_COMMENT,
    commentId
  };
};

export const createComment = (photoId, body, commentUser) => dispatch => {
  return CommentApiUtil.createComment(photoId, body, commentUser)
  .then(createdComment => dispatch(receiveComment(createdComment)));
};

export const updateComment = (comment) => dispatch => {
  return CommentApiUtil.updateComment(comment)
  .then(updatedComment => dispatch(receiveComment(updateComment)));
};

export const deleteComment = (commentId) => dispatch => {
  return CommentApiUtil.deleteComment(commentId)
  .then(() => dispatch(removeComment(commentId)));
};
