import React, { Fragment } from 'react';

import './App.css';
import AppRouter from '../containers/router/Router';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

export default function App() {
  return (
    <div className="App is this">
      <Header />
      <AppRouter />
      <Footer />
    </div>
  );
}
