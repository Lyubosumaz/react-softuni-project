import { connect } from 'react-redux';
import { handleRoute } from '../../utils/history';
import { archiveReaderState } from '../../utils/archiveHandler';
import archive from './site-info-archive.json';

function Info(props) {
    function state() {
        return props.isLogin ? 'logged' : 'default';
    }

    return (
        <section className="info-component">
            <span>{archiveReaderState(archive, 'text', state())}</span>
            <button className="info-action-btn" onClick={handleRoute(archiveReaderState(archive, 'path', state()))}>
                {archiveReaderState(archive, 'button', state())}
            </button>
        </section>
    );
}

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
    };
}

export default connect(mapStateToProps)(Info);
