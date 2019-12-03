import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { connect } from 'react-redux';

import userService from '../../services/user-services';
import schema from './login-validations';

function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [errors, setErrors] = useState({});
    const history = useHistory();

    return (
        <form>
            <div className="form-container">
                <h1>Login</h1>
                <p>Please enter your Username and Password.</p>

                <div className="form-div-container">
                    <label for="username"><b>Username:</b></label>
                    <input type="text" placeholder="Enter your Username" name="username" className="form-input" id="username" {...username} />
                    {errors.username && <div className="form-input-error">{errors.username[0]}</div>}
                </div>

                <div className="form-div-container">
                    <label for="password"><b>Password:</b></label>
                    <input type="password" placeholder="Enter your Password" name="password" className="form-input" id="password" {...password} />
                    {errors.password && <div className="form-input-error">{errors.password[0]}</div>}
                </div>

                <div>
                    <button type="submit" className="form-action-btn" onClick={handleSubmit}>Login</button>
                </div>

                <div className="form-info-container">
                    <p>Don't have an account? <a href="/register">Create account</a>.</p>
                </div>
            </div>
        </form>
    );

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            username: username.value,
            password: password.value,
        };
        const hasErrors = Object.keys(errors).filter(key => errors[key].length > 0);

        if (hasErrors.length === 0 && data.username && data.password) {
            userService.login(data)
                .then(() => {
                    props.setLoginValue();
                    history.push('/home');
                }).catch(err => {
                    console.log(err)
                    setErrors({ ...errors, password: [err] });
                })
        }
    };

    function useFormInput(initialValue) {
        const [value, setValue] = useState(initialValue);

        function handleChange(event) {
            setValue(event.target.value);
            validate(event);
        };

        function validate(event) {
            const name = event.target.id;

            schema.fields[name].validate(event.target.value, { abortEarly: false })
                .then(() => {
                    setErrors({ ...errors, [name]: [] });
                })
                .catch((err) => {
                    setErrors({ ...errors, [name]: err.errors });
                });
        };

        return { value, onChange: handleChange };
    };
};

function mapStateToProps(state) {
    return {
        isLogin: state.login.isLogin,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        setLoginValue: () => dispatch({
            type: 'USER_LOGGED_IN'
        }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);