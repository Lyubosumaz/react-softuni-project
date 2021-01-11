import { Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from '../utils/history';
import { numberGenerator } from '../utils/stringHandler';
import AuthRoute from './AuthRoute';

// Default
import Home from '../containers/home';
import About from '../containers/about';
import HouseOfFame from '../containers/house-of-fame';
import TermsAndConditions from '../containers/terms-and-conditions';
import FourOFour from '../containers/404';

// User
import Register from '../containers/register';
import Login from '../containers/login';
import Logout from '../containers/logout';
import Profile from '../containers/profile';

// Games
import ForestRunner from '../components/Games/ForestRunner';
import Games from '../containers/games'; // TODO
import Progress from '../components/Games/ForestRunner/Progress'; // TODO
import Shop from '../components/Games/ForestRunner/Shop';
import Inventory from '../components/Games/ForestRunner/Inventory';
import Character from '../components/Games/ForestRunner/Character';

// Puzzles
import Puzzles from '../containers/puzzles'; // TODO

// Memes
import Social from '../containers/social';
import AddMeme from '../containers/social/add-meme';
import ViewMeme from '../containers/social/view-meme';
import EditMeme from '../containers/social/edit-meme';
import DeleteMeme from '../containers/social/delete-meme';

// Utility
import GameOptionBar from '../components/GameOptionBar';

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
                        <Fragment key={numberGenerator()}>
                            <GameOptionBar />
                            <AuthRoute path={`${url}/`} exact component={ForestRunner} />
                            <AuthRoute path={`${url}/progress`} exact component={Progress} />
                            <AuthRoute path={`${url}/shop`} exact component={Shop} />
                            <AuthRoute path={`${url}/inventory`} exact component={Inventory} />
                            <AuthRoute path={`${url}/character`} exact component={Character} />
                        </Fragment>
                    )}
                />
                <Route path="/games" exact component={Games} />
                <Route path="/puzzles" exact component={Puzzles} />
                <Route
                    path="/social"
                    render={({ match: { url } }) => (
                        <Fragment key={numberGenerator()}>
                            <AuthRoute path={`${url}/`} exact component={Social} />
                            <AuthRoute path={`${url}/add-meme`} exact component={AddMeme} />
                            <AuthRoute path={`${url}/view-meme/:id`} exact component={ViewMeme} />
                            <AuthRoute path={`${url}/edit-meme/:id`} exact component={EditMeme} />
                            <AuthRoute path={`${url}/delete-meme/:id`} exact component={DeleteMeme} />
                        </Fragment>
                    )}
                />
                <Route path="*" component={FourOFour} />
            </Switch>
        </Router>
    );
}
