import { connect } from 'react-redux';
import handleRoute from '../../utils/handleRoute';

function Options(props) {
    const isLogged = props.isLogin;

    return isLogged ? (
        <div className="options-bar">
            <ul>
                <li>
                    <button className="options-bar-button" onClick={handleRoute('/game/progress')}>
                        Progress
                    </button>
                </li>
                <li>
                    <button className="options-bar-button" onClick={handleRoute('/game/shop')}>
                        Shop
                    </button>
                </li>
                <li>
                    <button className="options-bar-button" onClick={handleRoute('/game/inventory')}>
                        Inventory
                    </button>
                </li>
                <li>
                    <button className="options-bar-button" onClick={handleRoute('/game/character')}>
                        Character
                    </button>
                </li>
            </ul>
        </div>
    ) : null;
}

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
    };
}

export default connect(mapStateToProps)(Options);
