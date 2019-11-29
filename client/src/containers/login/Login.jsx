import React from 'react';

import withForm from '../../components/higher-order-components/withForm';
import userService from '../../services/user-services';
import http from '../../services/http';

// import './login.css';

class Login extends React.Component {

    usernameChangeHandler = this.props.controlChangeHeaderFactory('username');
    passwordChangeHandler = this.props.controlChangeHeaderFactory('password');

    submitHandler = (ev) => {
        ev.preventDefault();

        const errors = this.props.getFormErrorsState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        userService.login(data).then((res) => {
            this.props.handlers.handleLogin();
            this.props.history.push('/home');
        });

        // http.User.login(data).then(() => {
        //    this.props.history.push('/home');
        // });
    }

    render() {

        return (
            <form>
                <div className="form-container">
                    <h1>Login</h1>
                    <p>Please enter your Username and Password</p>

                    <div>
                        <label for="username"><b>Username:</b></label>
                        <input type="text" placeholder="Enter your Username" name="username" className="form-input" onChange={this.usernameChangeHandler} />
                    </div>

                    <div>
                        <label for="password"><b>Password:</b></label>
                        <input type="text" placeholder="Enter your Password" name="password" className="form-input" onChange={this.passwordChangeHandler} />
                    </div>

                    <div>
                        <button type="submit" className="form-action-btn" onClick={this.submitHandler}>Login</button>
                    </div>

                    <div className="form-info-container">
                        <p>Don't have an account? <a href="/register">Create account</a>.</p>
                    </div>
                </div>
            </form>
        );
    };
}

export default withForm(Login, { username: '', password: '' });