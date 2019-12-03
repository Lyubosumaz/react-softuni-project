import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from '../home/Home';
import About from '../about/About';
import HouseOfFame from '../house-of-fame/HouseOfFame';
import Register from '../register/Register';
import Login from '../login/Login';
import Logout from '../logout/Logout';
import fourOFour from '../404/404';
import Game from '../game/Game';
import Profile from '../profile/Profile';

export default function AppRouter(props) {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/house-of-fame" exact component={HouseOfFame} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact render={(pr) => <Login {...pr} handlers={props.handlers} />} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/game" exact component={Game} />
                <Route path="*" component={fourOFour} />
                <Route path="/profile" component={Profile} />
            </Switch>
        </BrowserRouter>
    );
};