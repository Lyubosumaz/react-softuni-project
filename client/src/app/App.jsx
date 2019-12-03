import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import store from '../services/store';

import './App.css';
import Router from '../containers/router/Router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import OptionsBar from '../components/options-bar/OptionsBar';

import '../assets/main-styles.css';
import '../assets/forms-style.css';

function parseCookies() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {});
}

export default function App() {
  // const [isLogged, setIsLogged] = useState(false);

  // let cookies = parseCookies();

  // useEffect(() => {
  //   setIsLogged(!!cookies['auth-token']);
  // }, [cookies])

  // const handleLogin = () => {
  //   const cookies = parseCookies();
  //   setIsLogged(!!cookies['auth-token']);
  // }

  return (
    <div className="App is this">
      <Provider store={store}>
        <Header />
        <OptionsBar />
        <Router />
        <Footer />
      </Provider>
    </div>
  );
}
