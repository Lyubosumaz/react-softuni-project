import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../../services/history';

import Home from '../home/Home';
import About from '../about/About';
import HouseOfFame from '../house-of-fame/HouseOfFame';
import Register from '../register/Register';
import Login from '../login/Login';
import Logout from '../logout/Logout';
import fourOFour from '../404/404';
import Game from '../game/Game';
import Profile from '../profile/Profile';
import TermsAndPrivacy from '../terms-and-privacy/TermsAndPrivacy';
import Progress from '../progress/Progress';
import Shop from '../shop/Shop';
import Inventory from '../inventory/Inventory';
import Character from '../character/Character';
import Social from '../social/Social';

export default function AppRouter(props) {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/house-of-fame" exact component={HouseOfFame} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact render={(pr) => <Login {...pr} handlers={props.handlers} />} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/game" exact component={Game} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/terms-and-privacy" exact component={TermsAndPrivacy} />
                <Route path="/progress" exact component={Progress} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/inventory" exact component={Inventory} />
                <Route path="/character" exact component={Character} />
                <Route path="/social" exact component={Social} />
                <Route path="*" component={fourOFour} />
            </Switch>
        </Router>
    );
};