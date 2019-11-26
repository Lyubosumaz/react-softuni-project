import React from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import myLogo from '../../assets/MyLogo.png';
import './header.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <img className="logo" src={myLogo} />
                    <header>
                        <Button color="inherit" href="/home">Home</Button>
                        <Button color="inherit" href="/house-of-fame">House of Fame</Button>
                        <Button color="inherit" href="/login">Login</Button>
                        <Button color="inherit" href="/register">Register</Button>
                        <Button color="inherit" href="/logout">Logout</Button>
                    </header>
                </Toolbar>
            </AppBar>
        </div>
    );
}