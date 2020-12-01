import { connect } from 'react-redux';
import { archiveReaderState } from '../../utils/archiveHandler';
import archive from './site-info-archive.json';
import Button from '../Button';

function Info(props) {
    function state() {
        return props.isLogin ? 'logged' : 'default';
    }

    return (
        <section className="info-component">
            <div className="info-component-wrapper">
                <span>{archiveReaderState(archive, 'text', state())}</span>
                <Button
                    additionalClassName="info-action-btn"
                    buttonText={archiveReaderState(archive, 'button', state())}
                    direction={archiveReaderState(archive, 'path', state())}
                />
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
