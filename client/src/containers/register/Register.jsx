import { useState } from 'react';
import history from '../../utils/history';
import http from '../../services/http';
import { toast } from 'react-toastify';
import schema from './register-validations';
// import './register.css';

export default function Register() {
    const username = useFormInput('');
    const email = useFormInput('');
    const password = useFormInput('');
    const repeatPassword = useFormInput('');
    const [subscribe, setSubscribe] = useState(false);
    const [errors, setErrors] = useState({});

    const handleRoute = (name) => (e) => {
        e.preventDefault();
        history.push(name);
    };

    function useFormInput(initialValue) {
        const [value, setValue] = useState(initialValue);

        function handleChange(event) {
            setValue(event.target.value);
            validate(event);
        }

        function validate(event) {
            const name = event.target.id;

            schema.fields[name]
                .validate(event.target.value, { abortEarly: false })
                .then(() => {
                    setErrors({ ...errors, [name]: null });
                })
                .catch((err) => {
                    setErrors({ ...errors, [name]: err.errors });
                });
        }

        return { value, onChange: handleChange };
    }

    console.log(errors);

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            username: username.value,
            email: email.value,
            password: password.value,
            repeatPassword: repeatPassword.value,
            subscribe: subscribe,
        };

        const hasErrors = Object.keys(errors).filter((key) => errors[key].length > 0);

        if (data.password !== data.repeatPassword) {
            return setErrors({ ...errors, repeatPassword: ["Passwords doesn't match"] });
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
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <header className="form-header">
                    <h1>Register</h1>
                    <p>Please fill this form to create your Account.</p>
                </header>

                <div className="form-fields-wrapper">
                    <div className="form-field">
                        <label htmlFor="username">
                            <span>Username:</span>
                        </label>

                        <input type="text" placeholder="Enter your Username" className="form-input" id="username" {...username} />

                        {(errors.username && (
                            <div className="form-error-message">
                                <span>{errors.username[0]}</span>
                            </div>
                        )) ||
                            (!errors.username && (
                                <div className="form-error-container">
                                    <span>Error Container</span>
                                </div>
                            ))}
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">
                            <span>Email:</span>
                        </label>

                        <input type="email" placeholder="Enter your Email" className="form-input" id="email" {...email} />

                        {(errors.email && (
                            <div className="form-error-message">
                                <span>{errors.email[0]}</span>
                            </div>
                        )) ||
                            (errors.email == null && (
                                <div className="form-error-container">
                                    <span>Error Container</span>
                                </div>
                            ))}
                    </div>

                    <div className="form-field">
                        <label htmlFor="password">
                            <span>Password:</span>
                        </label>

                        <input type="password" placeholder="Enter your Password" className="form-input" id="password" {...password} />

                        {(errors.password && (
                            <div className="form-error-message">
                                <span>{errors.password[0]}</span>
                            </div>
                        )) ||
                            (!errors.password && (
                                <div className="form-error-container">
                                    <span>Error Container</span>
                                </div>
                            ))}
                    </div>

                    <div className="form-field">
                        <label htmlFor="repeat-password">
                            <span>Repeat-Password:</span>
                        </label>

                        <input type="password" placeholder="Confirm your Password" className="form-input" id="repeatPassword" {...repeatPassword} />

                        {(errors.repeatPassword && (
                            <div className="form-error-message">
                                <span>{errors.repeatPassword[0]}</span>
                            </div>
                        )) ||
                            (!errors.repeatPassword && (
                                <div className="form-error-container">
                                    <span>Error Container</span>
                                </div>
                            ))}
                    </div>

                    <div className="form-field-actions">
                        <div className="terms-conditions">
                            <span>By creating an account, you agree to our</span>
                            <button className="info-button" onClick={handleRoute('/terms-and-conditions')}>
                                Terms &amp; Conditions
                            </button>
                        </div>

                        <div className="subscribe">
                            <span>I do accept to receive feedback on my email:</span>
                            <input type="checkbox" id="register-checkbox" onClick={(e) => setSubscribe(e.target.checked)} />
                            <label htmlFor="register-checkbox">Subscribe</label>
                        </div>
                    </div>

                    <div className="form-field-buttons">
                        <input type="submit" className="form-action-btn" value="register" />
                        <input type="reset" className="form-action-btn" value="reset" />
                    </div>
                </div>

                <div className="info-container">
                    <span>Already have account?</span>
                    <button className="info-button" onClick={handleRoute('/login')}>
                        Sign in
                    </button>
                </div>
            </form>
        </div>
    );
}
