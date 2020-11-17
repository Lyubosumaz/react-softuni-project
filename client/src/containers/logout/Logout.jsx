import { connect } from 'react-redux';
import { history, handleRoute } from '../../utils/history';
import { httpUser } from '../../services/http';
import { toast } from 'react-toastify';
import { removeAllCookies } from '../../services/cookies';
import './logout.css';
import { setLogoutValue } from '../login/actions';
import Title from '../../components/title/Title';
import Info from '../../components/info/Info';

function Logout(props) {
    const yesButtonHandler = (e) => {
        e.preventDefault();
        httpUser
            .logout()
            .then((res) => {
                toast(res.message, {
                    type: toast.TYPE.SUCCESS,
                });
                removeAllCookies();
                props.setLogoutValue();
                history.push('/home');
            })
            .catch((err) => {
                toast(err.message, {
                    type: toast.TYPE.ERROR,
                });
            });
    };

    return (
        <section className="component-wrapper">
            <Title type={'component'} />

            <div className="component-data-wrapper">
                <ul className="buttons-list">
                    <li>
                        <button type="submit" className="logout-button" name="yes-btn" onClick={yesButtonHandler}>
                            <span>Yes</span>
                        </button>
                    </li>
                    <li>
                        <button type="submit" className="logout-button" name="no-btn" onClick={handleRoute('/home')}>
                            <span>No!</span>
                        </button>
                    </li>
                </ul>
            </div>

            <Info />
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
