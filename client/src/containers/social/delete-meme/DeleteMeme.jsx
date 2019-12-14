import React, { useState, useEffect } from 'react';
import history from '../../../utils/history';
import { connect } from 'react-redux';
import http from '../../../services/http';
import handleRoute from '../../../utils/handleRoutes';
import { toast } from 'react-toastify';
import './delete-meme.css';

function DeleteMeme(props) {
    const memeId = props.match.params.id;
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        http.Social.getMeme(memeId)
            .then((meme) => { setMeme(meme); })
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        if (props.isLogin) {
            http.Social.deleteMeme(memeId)
                .then((res) => {
                    toast(res.message, {
                        type: toast.TYPE.ERROR,
                    });
                    history.push('/social');
                }).catch((err) => {
                    toast(err.message, {
                        type: toast.TYPE.ERROR,
                    });
                });
        }
    };

    return (
        <div className="main-container">
            <form>
                <h1>Delete Meme</h1>

                <p>Are you sure you want to delete this meme?</p>

                <div className="form-div-container">
                    <label htmlFor="Title"><b>Title:</b></label>
                    {meme && <input type="text" value={meme.title} className="form-input" disabled />}
                </div>

                <div className="form-div-container">
                    <label htmlFor="imageUrl"><b>imageUrl:</b></label>
                    {meme && <input type="text" value={meme.imageUrl} className="form-input" disabled />}
                </div>

                <div>
                    <button type="submit" className="form-action-btn delete" onClick={handleSubmit}>Delete</button>
                </div>

                <div className="info-container">
                    <p>Don't delete your meme just continue scrolling <button className="info-button"
                        onClick={handleRoute('/social')}>Back</button>.</p>
                </div>
            </form>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
    };
};

export default connect(mapStateToProps)(DeleteMeme);