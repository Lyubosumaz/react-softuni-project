import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';
import HouseOfFame from '../house-of-fame/HouseOfFame';
import Register from '../register/Register';
import Login from '../login/Login';
import Logout from '../logout/Logout';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/house-of-fame" exact component={HouseOfFame} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" exact component={Logout} />
            </Switch>
        </Router>
    );
}