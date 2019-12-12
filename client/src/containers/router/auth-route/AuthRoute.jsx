import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function AuthRoute(props) {
    const { component: Component, isLogin, ...rest } = props;

    return (
        <Route {...rest} render={(props) => {
            return isLogin ? <Component {...props} /> : <Redirect to="/home" />
        }} />
    );
};

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
    };
};

export default connect(mapStateToProps)(AuthRoute);
