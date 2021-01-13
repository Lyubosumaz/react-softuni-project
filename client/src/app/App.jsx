import { useEffect, useRef } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import '../assets/scss/main.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Notification from '../components/Notification';
import Router from '../router/Router';
import { authCookie, removeAllCookies } from '../services/cookies';
import { httpUser } from '../services/http';
import { persistor, store } from '../services/redux/store';

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
                    <Notification duration={3} scrollAt={1} />
                </PersistGate>
            </Provider>
        </div>
    );
}
