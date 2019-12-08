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

export default function App() {
  //REFRESHING TOKEN FOR AUTH USER EVERY 60 SEC. = 6*10*1000
  useEffect(() => {
    setInterval(() => {
      const userAuthToken = authCookie();
      if (userAuthToken && store.getState().user.isLogin) {
        // console.log(userAuthToken);
        http.User.refresh();
      } else if (userAuthToken) {
        removeAllCookies();
      }
    }, 10 * 1000);
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
