import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { history } from '../../../utils/history';
import { httpSocial } from '../../../services/http';
import { setNotification } from '../../Notification/actions';
import { componentData } from '../../../class-names.json';
import Button from '../../Button';

function DeleteMeme({ isLogin, memeId, setNotificationSuccess, setNotificationError }) {
    const isLogged = isLogin;
    const memeIdProps = memeId;
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        httpSocial.getMeme(memeIdProps).then((meme) => {
            setMeme(meme);
        });
    }, [memeIdProps]);

    function handleDelete(e) {
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
        <section className={`${componentData}`}>
            <form>
                <div className="form-div-container">
                    <label htmlFor="Title">
                        <b>Title:</b>
                    </label>
                    {meme && <input type="text" value={meme.title} className="form-input" disabled />}
                </div>

                <div className="form-div-container">
                    <label htmlFor="imageUrl">
                        <b>imageUrl:</b>
                    </label>
                    {meme && <input type="text" value={meme.imageUrl} className="form-input" disabled />}
                </div>

                <div>
                    <Button additionalClassName="form-action-btn" buttonText="Delete" functionPressButton={handleDelete} />
                </div>
            </form>
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
