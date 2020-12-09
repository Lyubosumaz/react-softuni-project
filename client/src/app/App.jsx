import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '../services/store';
import { httpUser } from '../services/http';
import { authCookie, removeAllCookies } from '../services/cookies';

import Router from '../router/Router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Notification from '../components/Notification';

import '../assets/scss/main.scss';

export default function App() {
    // REFRESHING TOKEN EVERY 9 MINUTES = 9*60*1000
    useEffect(() => {
        setInterval(() => {
            const userAuthToken = authCookie();
            if (userAuthToken && store.getState().user.isLogin) {
                // console.log(userAuthToken);
                httpUser.refresh();
            } else if (userAuthToken) {
                removeAllCookies();
            }
        }, 9 * 60 * 1000);
    });

    // Re-Rendering Log
    const renders = useRef(0);
    console.log('times was rendered: ', renders.current++);

    return (
        <div className="app-container">
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Header />
                    <main className="site-main scroll">
                        <Router />
                    </main>
                    <Footer />
                    <Notification duration={3} />
                </PersistGate>
            </Provider>
        </div>
    );
}
