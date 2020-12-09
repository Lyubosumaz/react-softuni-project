import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Button from '../Button';

function Options({ isLogin }) {
    const isLogged = isLogin;

    return isLogged ? (
        <div className="options-bar">
            <ul>
                <li>
                    <Button additionalClassName="options-bar-button" buttonText="Progress" direction="game/progress" />
                </li>
                <li>
                    <Button additionalClassName="options-bar-button" buttonText="Shop" direction="game/shop" />
                </li>
                <li>
                    <Button additionalClassName="options-bar-button" buttonText="Inventory" direction="game/inventory" />
                </li>
                <li>
                    <Button additionalClassName="options-bar-button" buttonText="Character" direction="game/character" />
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

Options.propTypes = {
    isLogin: PropTypes.bool.isRequired,
};
