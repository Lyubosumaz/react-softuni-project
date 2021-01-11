import { Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from '../utils/history';
import { numberGenerator } from '../utils/stringHandler';
import AuthRoute from './AuthRoute';

// Default
import Home from '../pages/home';
import About from '../pages/about';
import HouseOfFame from '../pages/house-of-fame';
import TermsAndConditions from '../pages/terms-and-conditions';
import FourOFour from '../pages/404';

// User
import Register from '../pages/register';
import Login from '../pages/login';
import Logout from '../pages/logout';
import Profile from '../pages/profile';

// Games
import ForestRunner from '../components/Games/ForestRunner';
import Games from '../pages/games'; // TODO
import Progress from '../components/Games/ForestRunner/Progress'; // TODO
import Shop from '../components/Games/ForestRunner/Shop';
import Inventory from '../components/Games/ForestRunner/Inventory';
import Character from '../components/Games/ForestRunner/Character';

// Puzzles
import Puzzles from '../pages/puzzles'; // TODO

// Memes
import Social from '../pages/social';
import AddMeme from '../pages/social/add-meme';
import ViewMeme from '../pages/social/view-meme';
import EditMeme from '../pages/social/edit-meme';
import DeleteMeme from '../pages/social/delete-meme';

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
