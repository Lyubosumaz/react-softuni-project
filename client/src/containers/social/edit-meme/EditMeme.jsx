import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import handleRoute from '../../../utils/handleRoutes';
import http from '../../../services/http';
import schema from './edit-meme-validations';

function EditMeme(props) {
    const [meme, setMeme] = useState(null)
    const title = useFormInput('');
    const imageUrl = useFormInput('');
    const [errors, setErrors] = useState({});
    const history = useHistory();

    const memeId = props.match.params.id;
    useEffect(() => {
        http.Social.getMeme(memeId)
            .then((meme) => { setMeme(meme); })
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        const meme = {
            id: memeId,
            title: title.value,
            imageUrl: imageUrl.value
        };
        const hasErrors = Object.keys(errors).filter(key => errors[key].length > 0);

        if (hasErrors.length === 0 && meme.title && meme.imageUrl && props.isLogin) {
            http.Social.editMeme(meme)
            history.push('/social');
        }
    };

    function useFormInput(initialValue) {
        const [value, setValue] = useState(initialValue);

        function handleChange(event) {
            setValue(event.target.value);
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

        return { value, onChange: handleChange };
    };

    return (
        <div className="main-container">
            <form>
                <h1>Edit Meme</h1>

                <p>Editing meme was never been easier.</p>

                <div className="form-div-container">
                    <label htmlFor="Title"><b>Title:</b></label>
                    {meme && <input type="text" placeholder={meme.title} className="form-input" id="title" onChange={useFormInput} {...title} />}
                    {errors.title && <div className="form-input-error">{errors.title[0]}</div>}
                </div>

                <div className="form-div-container">
                    <label htmlFor="imageUrl"><b>imageUrl:</b></label>
                    {meme && <input type="text" placeholder={meme.imageUrl} className="form-input" id="imageUrl" onChange={useFormInput} {...imageUrl} />}
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