import { connect } from 'react-redux';
import Button from '../Button';

function Options(props) {
    const isLogged = props.isLogin;

    return isLogged ? (
        <div className="options-bar">
            <ul>
                <li>
                    <Button buttonClass="options-bar-button" direction="game/progress" buttonName="Progress" />
                </li>
                <li>
                    <Button buttonClass="options-bar-button" direction="game/shop" buttonName="Shop" />
                </li>
                <li>
                    <Button buttonClass="options-bar-button" direction="game/inventory" buttonName="Inventory" />
                </li>
                <li>
                    <Button buttonClass="options-bar-button" direction="game/character" buttonName="Character" />
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
