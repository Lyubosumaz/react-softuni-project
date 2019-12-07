import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import http from '../../services/http';
import schema from './login-validations';
import handleRoute from '../../utils/handleRoutes';

function Login(props) {
    const username = useFormInput('');
    const password = useFormInput('');
    const [errors, setErrors] = useState({});
    const history = useHistory();

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

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            username: username.value,
            password: password.value,
        };
        const hasErrors = Object.keys(errors).filter(key => errors[key].length > 0);

        if (hasErrors.length === 0 && data.username && data.password) {
            http.User.login(data)
                .then((res) => {
                    console.log(res)
                    props.setLoginValue(res)
                    history.push('/home');
                }).catch(err => {
                    setErrors({ ...errors, password: [err] });
                });
        }
    };

    return (
        <div className="main-container">
            <form>
                <h1>Login</h1>
                <p>Please enter your Username and Password.</p>

                <div className="form-div-container">
                    <label htmlFor="username"><b>Username:</b></label>
                    <input type="text" placeholder="Enter your Username" name="username" className="form-input" id="username" {...username} />
                    {errors.username && <div className="form-input-error">{errors.username[0]}</div>}
                </div>

                <div className="form-div-container">
                    <label htmlFor="password"><b>Password:</b></label>
                    <input type="password" placeholder="Enter your Password" name="password" className="form-input" id="password" {...password} />
                    {errors.password && <div className="form-input-error">{errors.password[0]}</div>}
                </div>

                <div>
                    <button type="submit" className="form-action-btn" onClick={handleSubmit}>Login</button>
                </div>

                <div className="info-container">
                    <p>Don't have an account? <button className="info-button"
                        onClick={handleRoute('/register')}>Create account</button>.</p>
                </div>
            </form>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        isLogin: state.login.isLogin,
    };
};

function mapDispatchToProps(dispatch) {
    return {
        setLoginValue: (data) => dispatch({
            type: 'USER_LOGGED_IN',
            payload: data,
        }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);