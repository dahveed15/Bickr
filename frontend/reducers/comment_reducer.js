import { RECEIVE_ALL_COMMENTS,
         RECEIVE_COMMENT,
         REMOVE_COMMENT } from '../actions/comment_actions';

import merge from 'lodash/merge';

const CommentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_COMMENTS:
      return merge({}, action.comments);
    case RECEIVE_COMMENT:
    console.log(action);
      return merge({}, oldState, {[action.comment.id]: action.comment});
    case REMOVE_COMMENT:
      let newState = merge({}, oldState);
      delete newState[action.commentId];
      return newState;
    default:
      return oldState;
  }
};

export default CommentsReducer;
