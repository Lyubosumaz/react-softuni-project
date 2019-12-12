import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../../utils/history';
import OptionBar from '../../components/options-bar/OptionsBar';
import AuthRoute from './auth-route/AuthRoute';

import Home from '../home/Home';
import About from '../about/About';
import HouseOfFame from '../house-of-fame/HouseOfFame';
import TermsAndConditions from '../terms-and-conditions/TermsAndConditions';
import FourOFour from '../404/404';
//user
import Register from '../register/Register';
import Login from '../login/Login';
import Logout from '../logout/Logout';
import Profile from '../profile/Profile';
//game
import Game from '../game/Game';
import Progress from '../game/progress/Progress'; // TODO
import Shop from '../game/shop/Shop';
import Inventory from '../game/inventory/Inventory';
import Character from '../game/character/Character';
//memes
import Social from '../social/Social';
import AddMeme from '../social/add-meme/AddMeme';
import ViewMeme from '../social/view-meme/ViewMeme';
import EditMeme from '../social/edit-meme/EditMeme';
import DeleteMeme from '../social/delete-meme/DeleteMeme';


export default function AppRouter() {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/home" exact component={Home} />
                <Route path="/about" exact component={About} />
                <Route path="/terms-and-conditions" exact component={TermsAndConditions} />
                <Route path="/house-of-fame" exact component={HouseOfFame} />
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <AuthRoute path="/logout" exact component={Logout} />
                <AuthRoute path="/profile" exact component={Profile} />
                <Route
                    path="/game"
                    render={({ match: { url } }) => (
                        <div className="main-container">
                            <OptionBar />
                            <AuthRoute path={`${url}/`} exact component={Game} />
                            <AuthRoute path={`${url}/progress`} exact component={Progress} />
                            <AuthRoute path={`${url}/shop`} exact component={Shop} />
                            <AuthRoute path={`${url}/inventory`} exact component={Inventory} />
                            <AuthRoute path={`${url}/character`} exact component={Character} />
                        </div>
                    )}
                />
                <Route
                    path="/social"
                    render={({ match: { url } }) => (
                        <React.Fragment>
                            <AuthRoute path={`${url}/`} exact component={Social} />
                            <AuthRoute path={`${url}/add-meme`} exact component={AddMeme} />
                            <AuthRoute path={`${url}/view-meme/:id`} exact component={ViewMeme} />
                            <AuthRoute path={`${url}/edit-meme/:id`} exact component={EditMeme} />
                            <AuthRoute path={`${url}/delete-meme/:id`} exact component={DeleteMeme} />
                        </React.Fragment>
                    )}
                />
                <Route path="*" component={FourOFour} />
            </Switch>
        </Router>
    );
};