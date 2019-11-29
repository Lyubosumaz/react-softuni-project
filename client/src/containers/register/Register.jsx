import React from 'react';
import withForm from '../../components/higher-order-components/withForm';
import userService from '../../services/user-services';
import validator from './register-validator';

class Register extends React.Component {

    usernameOnChangeHandler = this.props.controlChangeHeaderFactory('username');
    emailOnChangeHandler = this.props.controlChangeHeaderFactory('email');
    passwordOnChangeHandler = this.props.controlChangeHeaderFactory('password');
    repeatPasswordOnChangeHandler = this.props.controlChangeHeaderFactory('repeatPassword');

    submitHandler = () => {
        const errors = this.props.getFormErrorsState();
        if (!!errors) { return; }
        const data = this.props.getFormState();
        userService.register(data).then(() => {
            this.props.history.push('/login');
        })

    }

    getFirstControlError = name => {
        const errorState = this.props.getFormErrorsState();
        return errorState && errorState[name] && errorState[name][0];
    }

    render() {
        const usernameError = this.getFirstControlError('username');
        const emailError = this.getFirstControlError('email');
        const passwordError = this.getFirstControlError('password');
        const repeatPasswordError = this.getFirstControlError('repeatPassword');

        return (
            <form>
                <div className="form-container">
                    <h1>Register</h1>
                    <p>Please fill this form to create your Account.</p>
                    <div>
                        <label for="username"><b>Username:</b></label>
                        <input type="text" placeholder="Enter your Username" className="form-input" name="username" onChange={this.usernameOnChangeHandler} />
                        {usernameError && <div>{usernameError}</div>}
                    </div>
                    <div>
                        <label for="email"><b>Email:</b></label>
                        <input type="text" placeholder="Enter your Email" className="form-input" name="email" onChange={this.emailOnChangeHandler} />
                        {emailError && <div>{emailError}</div>}
                    </div>
                    <div>
                        <label for="password"><b>Password:</b></label>
                        <input type="text" placeholder="Enter your Password" className="form-input" name="password" onChange={this.passwordOnChangeHandler} />
                        {passwordError && <div>{passwordError}</div>}
                    </div>
                    <div>
                        <label for="repeat-password"><b>Repeat-Password:</b></label>
                        <input type="text" placeholder="Confirm your Password" className="form-input" name="repeat-password" onChange={this.repeatPasswordOnChangeHandler} />
                        {repeatPasswordError && <div>{repeatPasswordError}</div>}
                    </div>
                    <div>
                        <p>By creating an account, you agree to our <a href="/terms-and-privacy">Terms & Conditions</a>.</p>
                        <button type="button" className="form-action-btn" onClick={this.submitHandler}>Register</button>
                    </div>
                    <div className="form-info-container">
                        <p>Already have account? <a href="/login">Sign in</a>.</p>
                    </div>
                </div>
            </form>
        );
    };
};

const initialFormState = {
    username: '',
    email: '',
    password: '',
    repeatPassword: '',
};

export default withForm(Register, initialFormState, validator);