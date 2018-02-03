import * as AlbumApiUtil from '../util/album_api_util';

export const RECEIVE_ALL_ALBUMS = "RECEIVE_ALL_ALBUMS";
export const RECEIVE_ALBUM = "RECEIVE_ALBUM";
export const REMOVE_ALBUM = "REMOVE_ALBUM";


const receiveAllAlbums = albums => ({
  type: RECEIVE_ALL_ALBUMS,
  albums
});

const receiveAlbum = album => ({
  type: RECEIVE_ALBUM,
  album
});

const removeAlbum = albumId => ({
  type: REMOVE_ALBUM,
  albumId
});

export const fetchAlbums = () => dispatch => {
  return AlbumApiUtil.fetchAlbums().then((albums) => dispatch(receiveAllAlbums(albums)));
};

export const fetchAlbum = (id) => dispatch => {
  return AlbumApiUtil.fetchAlbum(id).then((album) => dispatch(receiveAlbum(album)));
};

export const createAlbum = (album) => dispatch => {
  return AlbumApiUtil.createAlbum(album).then((createdAlbum) => dispatch(receiveAlbum(createdAlbum)));
};

export const updateAlbum = (album) => dispatch => {
  return AlbumApiUtil.updateAlbum(album).then((updatedAlbum) => dispatch(receiveAlbum(updatedAlbum)));
};

export const deleteAlbum = (albumId) => dispatch => {
  return AlbumApiUtil.deleteAlbum(albumId).then(() => dispatch(removeAlbum(albumId)));
};
