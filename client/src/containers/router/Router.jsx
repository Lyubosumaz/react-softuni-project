import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import Home from '../home/Home';
import About from '../about/About';

export default function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" exact component={About} />
            </Switch>
        </Router>
    );
}