import { connect } from 'react-redux';
import { useState } from 'react';
import { PropTypes } from 'prop-types';
import { history } from '../../utils/history';
import { httpUser } from '../../services/http';
import schema from './register-validations';
import { setNotification } from '../Notification/actions';
import { formComponent, formFieldsWrapper, buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';

function Register({ setNotificationSuccess, setNotificationError }) {
    const username = useFormInput('');
    const email = useFormInput('');
    const password = useFormInput('');
    const repeatPassword = useFormInput('');
    const [subscribe, setSubscribe] = useState(false);
    const [errors, setErrors] = useState({});

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
                    setErrors({ ...errors, [name]: [] });
                })
                .catch((err) => {
                    setErrors({ ...errors, [name]: err.errors });
                });
        }

        return { value, onChange: handleChange };
    }

    function handleRegister(e) {
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
            httpUser
                .register(data)
                .then((res) => {
                    setNotificationSuccess(res);
                    history.push('/login');
                })
                .catch((err) => {
                    setNotificationError(err);
                });
        }
    }

    return (
        <section className={`${formComponent}`}>
            <div className={`${formFieldsWrapper}`}>
                <form onSubmit={handleRegister}>
                    <div className="form-field">
                        <label htmlFor="username">
                            <span>Username:</span>
                        </label>

                        <input type="text" placeholder="Enter your Username" className="form-input" id="username" {...username} />

                        {Array.isArray(errors.username) && errors.username[0] ? (
                            <div className="form-error-message">
                                <span>{errors.username[0]}</span>
                            </div>
                        ) : (
                            <div className="form-error-container">
                                <span>Error Container</span>
                            </div>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="email">
                            <span>Email:</span>
                        </label>

                        <input type="email" placeholder="Enter your Email" className="form-input" id="email" {...email} />

                        {Array.isArray(errors.email) && errors.email[0] ? (
                            <div className="form-error-message">
                                <span>{errors.email[0]}</span>
                            </div>
                        ) : (
                            <div className="form-error-container">
                                <span>Error Container</span>
                            </div>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="password">
                            <span>Password:</span>
                        </label>

                        <input type="password" placeholder="Enter your Password" className="form-input" id="password" {...password} />

                        {Array.isArray(errors.password) && errors.password[0] ? (
                            <div className="form-error-message">
                                <span>{errors.password[0]}</span>
                            </div>
                        ) : (
                            <div className="form-error-container">
                                <span>Error Container</span>
                            </div>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="repeat-password">
                            <span>Repeat-Password:</span>
                        </label>

                        <input type="password" placeholder="Confirm your Password" className="form-input" id="repeatPassword" {...repeatPassword} />

                        {Array.isArray(errors.repeatPassword) && errors.repeatPassword[0] ? (
                            <div className="form-error-message">
                                <span>{errors.repeatPassword[0]}</span>
                            </div>
                        ) : (
                            <div className="form-error-container">
                                <span>Error Container</span>
                            </div>
                        )}
                    </div>

                    <div className="form-field-actions">
                        <div className="terms-actions">
                            <span>By creating an account, you agree to our:</span>
                            {factoryButtons({ buttonStyles: buttonClass.Register })('terms-and-conditions', 'Terms & Conditions', 'terms')}
                        </div>

                        <div className="subscribe-actions">
                            <span>I do accept to receive feedback on my email:</span>
                            <span>
                                <input type="checkbox" id="register-checkbox" onClick={(e) => setSubscribe(e.target.checked)} />
                                <label htmlFor="register-checkbox">Subscribe</label>
                            </span>
                        </div>
                    </div>

                    <div className="form-field-buttons">
                        <input type="reset" className="form-action-btn" value="reset" />
                        <input type="submit" className="form-action-btn" value="register" />
                    </div>
                </form>
            </div>
        </section>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        setNotificationSuccess: (data) => dispatch(setNotification().success(data)),
        setNotificationError: (data) => dispatch(setNotification().error(data)),
    };
}

export default connect(null, mapDispatchToProps)(Register);

Register.propTypes = {
    setNotificationSuccess: PropTypes.func.isRequired,
    setNotificationError: PropTypes.func.isRequired,
};
