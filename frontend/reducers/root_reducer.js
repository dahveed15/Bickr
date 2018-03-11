import { combineReducers } from 'redux';

import errorsReducer from './errors_reducer';
import sessionReducer from './session_reducer';
import AlbumsReducer from './album_reducer';
import PhotosReducer from './photo_reducer';
import CommentsReducer from './comment_reducer';
import ExplorePhotosReducer from './explore_photo_reducer';

const rootReducer = combineReducers({
  errors: errorsReducer,
  session: sessionReducer,
  albums: AlbumsReducer,
  photos: PhotosReducer,
  comments: CommentsReducer,
  explorePhotos: ExplorePhotosReducer
});

export default rootReducer;
