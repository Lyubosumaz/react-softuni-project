import { connect } from 'react-redux';
import { history, handleRoute } from '../../utils/history';
import { httpUser } from '../../services/http';
import { removeAllCookies } from '../../services/cookies';
import { setLogoutValue } from '../Login/actions';
import { componentData } from '../../class-names.json';
import { toastSuccess, toastError } from '../../utils/toastHandler';
import Button from '../Button';

function Logout(props) {
    const yesButtonHandler = (e) => {
        e.preventDefault();
        httpUser
            .logout()
            .then((res) => {
                toastSuccess(res);
                removeAllCookies();
                props.setLogoutValue();
                history.push('/home');
            })
            .catch((err) => {
                toastError(err);
            });
    };

    return (
        <section className={`${componentData} logout`}>
            <ul className="ul-buttons-list">
                <li>
                    <Button additionalClassName="logout-action-btn" buttonText="No!" direction="home" />
                </li>
                <li>
                    <button type="submit" className="logout-action-btn" onClick={yesButtonHandler}>
                        <span>Yes</span>
                    </button>
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
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
