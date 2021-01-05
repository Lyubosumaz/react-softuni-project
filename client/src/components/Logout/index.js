import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { history } from '../../utils/history';
import { factoryButtons } from '../../utils/factory';
import { httpUser } from '../../services/http';
import { removeAllCookies } from '../../services/cookies';
import { setLogoutValue } from '../Login/actions';
import { setNotification } from '../Notification/actions';
import { componentData } from '../../class-names.json';
import Button from '../Button';

function Logout({ setLogoutValueProps, setNotificationSuccess, setNotificationError }) {
    const logoutAttributes = { buttonStyles: 'logout-action-btn' };
    const initializedLogoutBtn = factoryButtons(logoutAttributes);

    const yesButtonHandler = (e) => {
        e.preventDefault();
        httpUser
            .logout()
            .then((res) => {
                setNotificationSuccess(res);
                removeAllCookies();
                setLogoutValueProps();
                history.push('/home');
            })
            .catch((err) => {
                setNotificationError(err);
            });
    };

    return (
        <section className={`${componentData} logout`}>
            <ul className="ul-buttons-list">
                <li>{initializedLogoutBtn('home', 'No!')}</li>
                <li>
                    <Button additionalClassName="logout-action-btn" buttonText="Yes" functionPressButton={yesButtonHandler} />
                </li>
            </ul>
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
        setLogoutValueProps: () => dispatch(setLogoutValue()),
        setNotificationSuccess: (data) => dispatch(setNotification().success(data)),
        setNotificationError: (data) => dispatch(setNotification().error(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);

Logout.propTypes = {
    setLogoutValueProps: PropTypes.func.isRequired,
    setNotificationSuccess: PropTypes.func.isRequired,
    setNotificationError: PropTypes.func.isRequired,
};
