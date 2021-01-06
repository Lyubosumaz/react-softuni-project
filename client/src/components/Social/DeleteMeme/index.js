import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { history } from '../../../utils/history';
import { httpSocial } from '../../../services/http';
import { setNotification } from '../../Notification/actions';
import { formComponent, formFieldsWrapper, formBtnClass } from '../../../utils/class-names.json';

function DeleteMeme({ isLogin, memeId, setNotificationSuccess, setNotificationError }) {
    const isLogged = isLogin;
    const memeIdProps = memeId;
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        httpSocial.getMeme(memeIdProps).then((meme) => {
            setMeme(meme);
        });
    }, [memeIdProps]);

    function handleDeleteMeme(e) {
        e.preventDefault();
        if (isLogged) {
            httpSocial
                .deleteMeme(memeIdProps)
                .then((res) => {
                    setNotificationSuccess(res);
                    history.push('/social');
                })
                .catch((err) => {
                    setNotificationError(err);
                });
        }
    }

    return (
        <section className={`${formComponent}`}>
            <div className={`${formFieldsWrapper}`}>
                <form onSubmit={handleDeleteMeme}>
                    <div className="form-field">
                        <label htmlFor="Title">
                            <span>Title:</span>
                        </label>

                        {meme && <input type="text" className="form-input" id="title" value={meme.title} disabled />}
                    </div>

                    <div className="form-field">
                        <label htmlFor="imageUrl">
                            <span>imageUrl:</span>
                        </label>

                        {meme && <input type="text" className="form-input" id="imageUrl" value={meme.imageUrl} disabled />}
                    </div>

                    <div className="form-field-buttons">
                        <input type="reset" className={formBtnClass} value="reset" />
                        <input type="submit" className={formBtnClass} value="delete meme" />
                    </div>
                </form>
            </div>
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
        setNotificationSuccess: (data) => dispatch(setNotification().success(data)),
        setNotificationError: (data) => dispatch(setNotification().error(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(DeleteMeme);

DeleteMeme.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    memeId: PropTypes.string.isRequired,
    setNotificationSuccess: PropTypes.func.isRequired,
    setNotificationError: PropTypes.func.isRequired,
};
