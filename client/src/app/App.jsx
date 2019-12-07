import React from 'react';
import { Provider } from 'react-redux';
import store from '../services/store';

import './App.css';
import Router from '../containers/router/Router';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

import '../assets/styles/main.css';
import '../assets/styles/forms.css';

export default function App() {
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
