import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
// import { removeAllCookies } from '../../services/cookies';
import { httpUser } from '../../services/http';
import { buttonClass, componentData } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';
// import { history } from '../../utils/history';
import { setLogoutValue } from '../Login/actions';
import { setNotification } from '../Notification/actions';

function Logout({ setLogoutValueProps, setNotificationSuccess, setNotificationError }) {
    const initializedLogoutBtn = factoryButtons({ buttonStyles: buttonClass.Logout });

    const yesButtonHandler = (e) => {
        e.preventDefault();
        httpUser
            .logout()
            .then((res) => {
                setNotificationSuccess(res);
                // removeAllCookies();
                // setLogoutValueProps();
                // history.push('/home');
            })
            .catch((err) => {
                setNotificationError(err);
            });
    };

    return (
        <section className={`${componentData} logout`}>
            <ul className="ul-buttons-list">
                <li>{initializedLogoutBtn('home', 'No!')}</li>
                <li>{initializedLogoutBtn(null, 'Yes', null, yesButtonHandler)}</li>
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
