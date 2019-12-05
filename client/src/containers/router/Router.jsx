import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../../services/history';

import Home from '../home/Home';
import About from '../about/About';
import HouseOfFame from '../house-of-fame/HouseOfFame';
import TermsAndPrivacy from '../terms-and-privacy/TermsAndPrivacy';
import fourOFour from '../404/404';
//user
import Register from '../register/Register';
import Login from '../login/Login';
import Logout from '../logout/Logout';
import Profile from '../profile/Profile';
//game
import Game from '../game/Game';
import Progress from '../progress/Progress';
import Shop from '../shop/Shop';
import Inventory from '../inventory/Inventory';
import Character from '../character/Character';
//memes
import Social from '../social/Social';
import AddMeme from '../add-meme/AddMeme';

export default function AppRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/house-of-fame" exact component={HouseOfFame} />
                <Route path="/terms-and-privacy" exact component={TermsAndPrivacy} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/profile" exact component={Profile} />
                <Route path="/game" exact component={Game} />
                <Route path="/progress" exact component={Progress} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/inventory" exact component={Inventory} />
                <Route path="/character" exact component={Character} />
                <Route path="/social" exact component={Social} />
                <Route path="/social/add-meme" exact component={AddMeme} />
                <Route path="*" component={fourOFour} />
            </Switch>
        </Router>
    );
};