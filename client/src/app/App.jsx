import React, { Fragment } from 'react';

import './App.css';
import Router from '../containers/router/Router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import '../assets/main-style.css';

export default function App() {
  return (
    <div className="App is this">
      <Header />
      <Router />
      <Footer />
    </div>
  );
}
