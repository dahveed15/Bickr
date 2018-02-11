import * as PhotoApiUtil from '../util/photo_api_util';

export const RECEIVE_ALL_PHOTOS = "RECEIVE_ALL_PHOTOS";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";
export const RECEIVE_ALL_EXPLORE_PHOTOS = 'RECEIVE_ALL_EXPLORE_PHOTOS';

const receiveAllPhotos = photos => {
  return {
    type: RECEIVE_ALL_PHOTOS,
    photos
  };
};

const receivePhoto = photo => {
  return {
    type: RECEIVE_PHOTO,
    photo
  };
};

const removePhoto = photoId => {
  return {
    type: REMOVE_PHOTO,
    photoId
  };
};

const receiveAllExplorePhotos = explorePhotos => {
  return {
    type: RECEIVE_ALL_EXPLORE_PHOTOS,
    explorePhotos
  };
};

export const fetchPhotos = (albumId) => dispatch => {
  return PhotoApiUtil.fetchPhotos(albumId)
  .then(serverPhotos => dispatch(receiveAllPhotos(serverPhotos)));
};

export const fetchPhoto = (id) => dispatch => {
  return PhotoApiUtil.fetchPhoto(id)
  .then(serverPhoto => dispatch(receivePhoto(serverPhoto)));
};

export const createPhoto = (albumId, photo) => dispatch => {
  return PhotoApiUtil.createPhoto(albumId, photo)
  .then(createdPhoto => dispatch(receivePhoto(createdPhoto)));
};

export const updatePhoto = (photo) => dispatch => {
  return PhotoApiUtil.updatePhoto(photo)
  .then(updatedPhoto => dispatch(receivePhoto(updatePhoto)));
};

export const deletePhoto = (photoId) => dispatch => {
  return PhotoApiUtil.deletePhoto(photoId)
  .then(() => dispatch(removePhoto(photoId)));
};

export const explorePhotos = () => dispatch => {
  return PhotoApiUtil.explorePhotos().then((serverExplorePhotos) => dispatch(receiveAllExplorePhotos(serverExplorePhotos)));
};
