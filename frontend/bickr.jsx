import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchPhoto } from './actions/photo_actions';
import { createComment, deleteComment } from './actions/comment_actions';

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
  window.fetchPhoto = fetchPhoto;
  window.createComment = createComment;
  window.deleteComment = deleteComment;
  ReactDOM.render(<Root store={store} />, root);
});
