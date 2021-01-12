import { PropTypes } from 'prop-types';
import { useState } from 'react';
import { connect } from 'react-redux';
import { httpUser } from '../../services/http';
import { setNotification } from '../../services/redux/ducks/notification';
import { setLoginValue } from '../../services/redux/ducks/user';
import { formBtnClass, formComponent, formFieldsWrapper } from '../../utils/class-names.json';
import { history } from '../../utils/history';
import schema from './login-validations';

function Login({ setLoginValueProps, setNotificationSuccess }) {
    const username = useFormInput('');
    const password = useFormInput('');
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

    function handleLogin(e) {
        e.preventDefault();
        const data = {
            username: username.value,
            password: password.value,
        };
        const hasErrors = Object.keys(errors).filter((key) => errors[key].length > 0);

        if (hasErrors.length === 0 && data.username && data.password) {
            httpUser
                .login(data)
                .then((user) => {
                    setLoginValueProps(user);
                    setNotificationSuccess('You have Logged successfully!');
                    history.push('/home');
                })
                .catch((err) => {
                    setErrors({ ...errors, password: [err] });
                });
        }
    }

    return (
        <section className={`${formComponent}`}>
            <div className={`${formFieldsWrapper}`}>
                <form onSubmit={handleLogin}>
                    <div className="form-field">
                        <label htmlFor="username">
                            <b>Username:</b>
                        </label>
                        <input type="text" placeholder="Enter your Username" name="username" className="form-input" id="username" {...username} />

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
                        <label htmlFor="password">
                            <b>Password:</b>
                        </label>
                        <input type="password" placeholder="Enter your Password" name="password" className="form-input" id="password" {...password} />

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

                    <div className="form-field-buttons">
                        <input type="reset" className={formBtnClass} value="reset" />
                        <input type="submit" className={formBtnClass} value="login" />
                    </div>
                </form>
            </div>
        </section>
    );
}

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setLoginValueProps: (data) => dispatch(setLoginValue(data)),
        setNotificationSuccess: (data) => dispatch(setNotification(data).success()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
    setLoginValueProps: PropTypes.func.isRequired,
    setNotificationSuccess: PropTypes.func.isRequired,
};
