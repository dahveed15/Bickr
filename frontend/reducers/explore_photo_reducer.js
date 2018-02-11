import { RECEIVE_ALL_EXPLORE_PHOTOS } from '../actions/photo_actions';

import merge from 'lodash/merge';

const ExplorePhotosReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_ALL_EXPLORE_PHOTOS:
      return merge({}, action.explorePhotos);
    default:
      return oldState;
  }
};

export default ExplorePhotosReducer;
