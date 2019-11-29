import React from 'react';

import './App.css';
import Router from '../containers/router/Router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

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

  const cookies = parseCookies();
  const isLogged = !!cookies['auth-token'];

  return (
    <div className="App is this">
      <Header isLogged={isLogged} />
      <Router />
      <Footer />
    </div>
  );
}
