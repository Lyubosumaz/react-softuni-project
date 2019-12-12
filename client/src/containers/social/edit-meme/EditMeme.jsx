import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import handleRoute from '../../../utils/handleRoutes';
import http from '../../../services/http';
import schema from './edit-meme-validations';

function EditMeme(props) {
    const [meme, setMeme] = useState('')
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors] = useState({});
    const history = useHistory();
    const memeId = props.match.params.id;

    useEffect(() => {
        http.Social.getMeme(memeId)
            .then((meme) => {
                setMeme(meme);
                setTitle(meme.title);
                setImageUrl(meme.imageUrl);
            });
    }, []);

    function handleTitle(event) {
        setTitle(event.target.value);
        validate(event);
    };

    function handleInputUrl(event) {
        setImageUrl(event.target.value);
        validate(event);
    };

    function validate(event) {
        const name = event.target.id;

        schema.fields[name].validate(event.target.value, { abortEarly: false })
            .then(() => {
                setErrors({ ...errors, [name]: [] });
            })
            .catch((err) => {
                setErrors({ ...errors, [name]: err.errors });
            });
    };

    function handleSubmit(e) {
        e.preventDefault();

        const data = {
            id: memeId,
            title,
            imageUrl
        };
        const hasErrors = Object.keys(errors).filter(key => errors[key].length > 0);

        if (hasErrors.length === 0 && data.title && data.imageUrl && props.isLogin) {
            http.Social.editMeme(data).then((res) => { console.log(res); });
            history.push('/social');
        }
    };

    return (
        <div className="main-container">
            <form>
                <h1>Edit Meme</h1>

                <p>Editing meme was never been easier.</p>

                <div className="form-div-container">
                    <label htmlFor="Title"><b>Title:</b></label>
                    {meme && <input type="text" placeholder="Write some funny title" className="form-input" id="title" onChange={handleTitle} value={title} />}
                    {errors.title && <div className="form-input-error">{errors.title[0]}</div>}
                </div>

                <div className="form-div-container">
                    <label htmlFor="imageUrl"><b>imageUrl:</b></label>
                    {meme && <input type="text" placeholder="Copy and Paste your memeURL here" className="form-input" id="imageUrl" onChange={handleInputUrl} value={imageUrl} />}
                    {errors.imageUrl && <div className="form-input-error">{errors.imageUrl[0]}</div>}
                </div>

                <div>
                    <button type="submit" className="form-action-btn" onClick={handleSubmit}>Edit</button>
                </div>

                <div className="info-container">
                    <p>Add Meme or just watch others memes <button className="info-button"
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

export default connect(mapStateToProps)(EditMeme);
