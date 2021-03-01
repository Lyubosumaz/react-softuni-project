import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { archiveReaderState } from '../../utils/archiveHandler';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';
import archive from './site-info-archive.json';

function Info({ isLogin }) {
    function state() {
        return isLogin ? 'logged' : 'default';
    }

    return (
        <section className="info-component">
            <div className="info-component-wrapper">
                <span>{archiveReaderState(archive, 'text', state())}</span>

                {/* return <Button( SET_CLASS )( DIRECTION: archive[CURRENT], BUTTON_NAME: archive[CURRENT], ADDITIONAL_CLASS: null, MY_FUNC: null )> */}
                {factoryButtons({ buttonStyles: buttonClass.Info })(archiveReaderState(archive, 'path', state()), archiveReaderState(archive, 'button', state()))}
            </div>
        </section>
    );
}

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
    };
}

export default connect(mapStateToProps)(Info);

Info.propTypes = {
    isLogin: PropTypes.bool.isRequired,
};
