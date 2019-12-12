import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import http from '../../../services/http';
import handleRoute from '../../../utils/handleRoutes';
import { toast } from 'react-toastify';
import schema from './add-meme-validations';

function AddMeme(props) {
    const title = useFormInput('');
    const imageUrl = useFormInput('');
    const [errors, setErrors] = useState({});
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        const meme = {
            title: title.value,
            imageUrl: imageUrl.value,
        };
        const hasErrors = Object.keys(errors).filter(key => errors[key].length > 0);

        if (hasErrors.length === 0 && meme.title && meme.imageUrl && props.isLogin) {
            http.Social.addMeme(meme)
                .then((res) => {
                    toast(res.message, {
                        type: toast.TYPE.SUCCESS,
                    });
                    history.push('/social');
                })
                .catch((err) => {
                    toast(err.message, {
                        type: toast.TYPE.ERROR,
                    });
                });
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
                <h1>Add Meme</h1>
                <p>Adding meme was never been easier.</p>

                <div className="form-div-container">
                    <label htmlFor="Title"><b>Title:</b></label>
                    <input type="text" placeholder="Write some funny title" className="form-input" id="title" onChange={useFormInput} {...title} />
                    {errors.title && <div className="form-input-error">{errors.title[0]}</div>}
                </div>

                <div className="form-div-container">
                    <label htmlFor="imageUrl"><b>imageUrl:</b></label>
                    <input type="text" placeholder="Copy and Paste your memeURL here" className="form-input" id="imageUrl" onChange={useFormInput} {...imageUrl} />
                    {errors.imageUrl && <div className="form-input-error">{errors.imageUrl[0]}</div>}
                </div>

                <div>
                    <button type="submit" className="form-action-btn" onClick={handleSubmit}>Submit</button>
                </div>

                <div className="info-container">
                    <p>You could add meme later, maybe play a <button className="info-button"
                        onClick={handleRoute('/game')}>Game</button>?</p>
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

export default connect(mapStateToProps)(AddMeme);
