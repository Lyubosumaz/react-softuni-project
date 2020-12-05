import { connect } from 'react-redux';
import { history } from '../../utils/history';
import { httpUser } from '../../services/http';
import { removeAllCookies } from '../../services/cookies';
import { setLogoutValue } from '../Login/actions';
import { setNotification } from '../Notification/actions';
import { componentData } from '../../class-names.json';
import { toastError } from '../../utils/toastHandler';
import { notificationType } from '../../settings.json';
import Button from '../Button';

function Logout(props) {
    const yesButtonHandler = (e) => {
        e.preventDefault();
        httpUser
            .logout()
            .then((res) => {
                // toastSuccess(res);
                console.log(res);
                props.setNotificationSuccess(res);
                // props.setNotification({
                //     msg: res.message ? res.message : res,
                //     // type: notificationType.success
                // });
                // removeAllCookies();
                // props.setLogoutValue();
                // history.push('/home');
            })
            .catch((err) => {
                console.log(err.message);
                props.setNotificationError(err.message);
            });
    };

    return (
        <section className={`${componentData} logout`}>
            <ul className="ul-buttons-list">
                <li>
                    <Button additionalClassName="logout-action-btn" buttonText="No!" direction="home" />
                </li>
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
        setLogoutValue: () => dispatch(setLogoutValue()),
        setNotificationSuccess: (data) => dispatch(setNotification().success(data)),
        setNotificationError: (data) => dispatch(setNotification().error(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
