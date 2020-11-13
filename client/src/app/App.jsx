import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PersistGate } from "redux-persist/integration/react";

import http from 'services/http';
import { store, persistor } from 'services/store';
import { authCookie, removeAllCookies } from 'services/cookies'

import Router from 'router/Router';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';

import './app.scss';
import 'assets/styles/main.css';
import 'assets/styles/forms.css';
import 'assets/styles/list-card.css';
import 'assets/styles/item-card.css';

toast.configure({
  autoClose: 7000,
  draggable: false,
  position: toast.POSITION.BOTTOM_CENTER,
});

export default function App() {
  //REFRESHING TOKEN EVERY 9 MINUTES = 9*60*1000
  useEffect(() => {
    setInterval(() => {
      const userAuthToken = authCookie();
      if (userAuthToken && store.getState().user.isLogin) {
        // console.log(userAuthToken);
        http.User.refresh();
      } else if (userAuthToken) {
        removeAllCookies();
      }
    }, 9 * 60 * 1000);
  });

  return (
    <div className="app-container">
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Header />
          <Router />
          <Footer />
        </PersistGate>
      </Provider>
    </div>
  );
};
