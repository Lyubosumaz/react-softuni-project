import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../services/store';

import './App.css';
import Router from '../containers/router/Router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import http from '../services/http';
import { authCookie, removeAllCookies } from '../services/cookies'

import '../assets/styles/main.css';
import '../assets/styles/forms.css';

export default function App() {
  console.log(store.getState().login)

  useEffect(() => {
    setInterval(() => {
      const test = authCookie()
      if (test && store.getState().login.isLogin) {
        console.log(test)
        http.User.refresh()
      } else if (test) {
        console.log('else')

        removeAllCookies()
      }
    }, 10 * 1000)
  })

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
