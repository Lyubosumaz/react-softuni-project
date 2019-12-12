import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../services/store';

import Router from '../containers/router/Router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import http from '../services/http';
import { authCookie, removeAllCookies } from '../services/cookies'

import './App.css';
import '../assets/styles/main.css';
import '../assets/styles/forms.css';
import '../assets/styles/list-card.css';
import '../assets/styles/item-card.css';

export default function App() {
  //REFRESHING TOKEN FOR AUTH USER EVERY 5 MINUTES = 5*60*1000
  useEffect(() => {
    setInterval(() => {
      const userAuthToken = authCookie();
      if (userAuthToken && store.getState().user.isLogin) {
        // console.log(userAuthToken);
        http.User.refresh();
      } else if (userAuthToken) {
        removeAllCookies();
      }
    }, 5 * 60 * 1000);
  });

  return (
    <div className="app-container">
      <Provider store={store}>
        <Header />
        <Router />
        <Footer />
      </Provider>
    </div>
  );
};
