import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { createPhoto, updatePhoto, fetchPhotos, deletePhoto } from './actions/photo_actions';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.createPhoto = createPhoto;
  window.updatePhoto = updatePhoto;
  window.fetchPhotos = fetchPhotos;

  ReactDOM.render(<Root store={store} />, root);
});
