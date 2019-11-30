import React, { useState } from 'react';
import userService from '../../services/user-services';
import schema from './register-validator';


export default function Register() {
    const username = useFormInput('');
    const email = useFormInput('');
    const password = useFormInput('');
    const repeatPassword = useFormInput('');
    const [errors, setErrors] = useState({});

    return (
        <form>
            <div className="form-container">
                <h1>Register</h1>
                <p>Please fill this form to create your Account.</p>
                <div className="form-div-container">
                    <label for="username"><b>Username:</b></label>
                    <input type="text" placeholder="Enter your Username" className="form-input" id="username" {...username} />
                    {errors.username && <div className="form-input-error">{errors.username[0]}</div>}
                </div>
                <div className="form-div-container">
                    <label for="email"><b>Email:</b></label>
                    <input type="text" placeholder="Enter your Email" className="form-input" id="email" {...email} />
                    {errors.email && <div className="form-input-error">{errors.email[0]}</div>}
                </div>
                <div className="form-div-container">
                    <label for="password"><b>Password:</b></label>
                    <input type="password" placeholder="Enter your Password" className="form-input" id="password" {...password} />
                    {errors.password && <div className="form-input-error">{errors.password[0]}</div>}
                </div>
                <div className="form-div-container">
                    <label for="repeat-password"><b>Repeat-Password:</b></label>
                    <input type="password" placeholder="Confirm your Password" className="form-input" id="repeatPassword" {...repeatPassword} />
                    {errors.repeatPassword && <div className="form-input-error">{errors.repeatPassword[0]}</div>}
                </div>
                <div>
                    <p>By creating an account, you agree to our <a href="/terms-and-privacy">Terms & Conditions</a>.</p>
                    <button type="button" className="form-action-btn" onClick={handleSubmit}>Register</button>
                </div>
                <div className="form-info-container">
                    <p>Already have account? <a href="/login">Sign in</a>.</p>
                </div>
            </div>
        </form>
    );

    function handleSubmit() {
        const data = {
            username: username.value,
            email: email.value,
            password: password.value,
            repeatPassword: repeatPassword.value
        }

        const hasErrors = Object.keys(errors).filter(key => errors[key].length > 0)

        if (data.password !== data.repeatPassword) {
            console.log('Passwords doesn\'t match')
            return;
        }

        if (hasErrors.length === 0 && data.username && data.email && data.password) {
            userService.register(data).then(() => {
                console.log('Redirect')
            });
        }
    }

    function useFormInput(initialValue) {
        const [value, setValue] = useState(initialValue);

        function handleChange(ev) {
            setValue(ev.target.value);
            validate(ev)
        }

        function validate(ev) {
            const name = ev.target.id;
            schema.fields[name].validate(ev.target.value, { abortEarly: false })
                .then(() => {
                    setErrors({ ...errors, [name]: [] });
                })
                .catch((err) => {
                    setErrors({ ...errors, [name]: err.errors })
                });
        }

        return {
            value,
            onChange: handleChange
        };
    }
}



