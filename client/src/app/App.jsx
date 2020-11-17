import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { toast } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';

import { httpUser } from '../services/http';
import { store, persistor } from '../services/store';
import { authCookie, removeAllCookies } from '../services/cookies';

import Router from '../router/Router';
import Header from '../components/Header';
import Footer from '../components/Footer';
import 'react-toastify/dist/ReactToastify.css';

// import './app.scss';
import '../assets/scss/main.scss';
// import 'assets/styles/main.css';
// import 'assets/styles/forms.css';
// import 'assets/styles/list-card.css';
// import 'assets/styles/item-card.css';

toast.configure({
    autoClose: 7000,
    draggable: false,
    position: toast.POSITION.BOTTOM_CENTER,
});

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

    return (
        <div className="app-container">
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <Header />
                    <main className="site-main">
                        <Router />
                    </main>
                    <Footer />
                </PersistGate>
            </Provider>
        </div>
    );
}
