import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();

  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  ReactDOM.render(<h1>Welcome to Bickr!</h1>, root);
});
