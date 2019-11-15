import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./store/store";
import Root from './components/root';

import { signup, login, logout } from './actions/session_actions';
import { fetchGuides } from './actions/guide_actions';

window.signup = signup;
window.login = login;
window.logout = logout;
window.fetchGuides = fetchGuides;

document.addEventListener("DOMContentLoaded", () => {
  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: window.currentUser
      },
      session: { id: Object.keys(window.currentUser)[0] }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  $(window).on('load', function () {
    $('#cover').fadeOut(4000);
  })

  window.getState = store.getState;
  window.dispatch = store.dispatch;
})