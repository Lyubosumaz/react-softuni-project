import { Fragment } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import GameOptionBar from '../components/GameOptionBar';
import ForestRunner from '../components/Games/ForestRunner';
import Character from '../components/Games/ForestRunner/Character';
import Inventory from '../components/Games/ForestRunner/Inventory';
import Progress from '../components/Games/ForestRunner/Progress'; // TODO
import Shop from '../components/Games/ForestRunner/Shop';
import FourOFour from '../pages/404';
import About from '../pages/about';
import Games from '../pages/games'; // TODO
import Home from '../pages/home';
import HouseOfFame from '../pages/house-of-fame';
import Login from '../pages/login';
import Logout from '../pages/logout';
import Profile from '../pages/profile';
import Puzzles from '../pages/puzzles'; // TODO
import Register from '../pages/register';
import Social from '../pages/social';
import AddMeme from '../pages/social/add-meme';
import DeleteMeme from '../pages/social/delete-meme';
import EditMeme from '../pages/social/edit-meme';
import ViewMeme from '../pages/social/view-meme';
import TermsAndConditions from '../pages/terms-and-conditions';
import { history } from '../utils/history';
import { numberGenerator } from '../utils/stringHandler';
import AuthRoute from './AuthRoute';
import { forestRunner } from './paths.json';

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
                    path={forestRunner}
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
