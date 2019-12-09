import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import history from '../../utils/history';
import OptionBar from '../../components/options-bar/OptionsBar';

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
import Progress from '../game/progress/Progress';
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
                <Route path="/register" exact component={Register} />
                <Route path="/login" exact component={Login} />
                <Route path="/logout" exact component={Logout} />
                <Route path="/house-of-fame" exact component={HouseOfFame} />
                <Route path="/profile" exact component={Profile} />
                <Route
                    path="/game"
                    render={({ match: { url } }) => (
                        <div className="main-container">
                            <OptionBar />
                            <Route path={`${url}/`} exact component={Game} />
                            <Route path={`${url}/progress`} exact component={Progress} />
                            <Route path={`${url}/shop`} exact component={Shop} />
                            <Route path={`${url}/inventory`} exact component={Inventory} />
                            <Route path={`${url}/character`} exact component={Character} />
                        </div>
                    )}
                />
                <Route
                    path="/social"
                    render={({ match: { url } }) => (
                        <React.Fragment>
                            <Route path={`${url}/`} exact component={Social} />
                            <Route path={`${url}/add-meme`} exact component={AddMeme} />
                            <Route path={`${url}/view-meme/:id`} exact component={ViewMeme} />
                            <Route path={`${url}/edit-meme/:id`} exact component={EditMeme} />
                            <Route path={`${url}/delete-meme/:id`} exact component={DeleteMeme} />
                        </React.Fragment>
                    )}
                />
                <Route path="*" component={FourOFour} />
            </Switch>
        </Router>
    );
};