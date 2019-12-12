import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import http from '../../services/http';
import { toast } from 'react-toastify';
import schema from './register-validations';
import './register.css';

export default function Register() {
    const username = useFormInput('');
    const email = useFormInput('');
    const password = useFormInput('');
    const repeatPassword = useFormInput('');
    const [subscribe, setSubscribe] = useState(false);
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const handleRoute = (name) => (e) => {
        e.preventDefault();
        history.push(name);
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

    function handleSubmit() {
        const data = {
            username: username.value,
            email: email.value,
            password: password.value,
            repeatPassword: repeatPassword.value,
            subscribe: subscribe
        };
        const hasErrors = Object.keys(errors).filter(key => errors[key].length > 0);

        if (data.password !== data.repeatPassword) {
            return setErrors({ ...errors, repeatPassword: ['Passwords doesn\'t match'] });
        }

        if (hasErrors.length === 0 && data.username && data.email && data.password) {
            http.User.register(data)
                .then((res) => {
                    toast(res.message, {
                        type: toast.TYPE.SUCCESS,
                    });
                    history.push('/login');
                })
                .catch((err) => {
                    toast(err.message, {
                        type: toast.TYPE.ERROR,
                    });
                });
        }
    };

    return (
        <div className="main-container">
            <form>
                <h1>Register</h1>
                <p>Please fill this form to create your Account.</p>

                <div className="form-div-container">
                    <label htmlFor="username"><b>Username:</b></label>
                    <input type="text" placeholder="Enter your Username" className="form-input" id="username" {...username} />
                    {errors.username && <div className="form-input-error">{errors.username[0]}</div>}
                </div>

                <div className="form-div-container">
                    <label htmlFor="email"><b>Email:</b></label>
                    <input type="text" placeholder="Enter your Email" className="form-input" id="email" {...email} />
                    {errors.email && <div className="form-input-error">{errors.email[0]}</div>}
                </div>

                <div className="form-div-container">
                    <label htmlFor="password"><b>Password:</b></label>
                    <input type="password" placeholder="Enter your Password" className="form-input" id="password" {...password} />
                    {errors.password && <div className="form-input-error">{errors.password[0]}</div>}
                </div>

                <div className="form-div-container">
                    <label htmlFor="repeat-password"><b>Repeat-Password:</b></label>
                    <input type="password" placeholder="Confirm your Password" className="form-input" id="repeatPassword" {...repeatPassword} />
                    {errors.repeatPassword && <div className="form-input-error">{errors.repeatPassword[0]}</div>}
                </div>

                <div>
                    <p>By creating an account, you agree to our <button className="info-button" onClick={handleRoute('/terms-and-conditions')}>Terms & Conditions</button>.</p>
                    <p className="register-checkbox">I do accept to receive feedback on my email:<input type="checkbox" onClick={(e) => setSubscribe(e.target.checked)} /><b>Subscribe</b>.</p>
                </div>

                <div>
                    <button type="button" className="form-action-btn" onClick={handleSubmit}>Register</button>
                </div>

                <div className="info-container">
                    <p>Already have account? <button className="info-button" onClick={handleRoute('/login')}>Sign in</button>.</p>
                </div>
            </form>
        </div>
    );
};
