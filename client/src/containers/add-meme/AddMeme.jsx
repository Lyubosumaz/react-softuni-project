import React, { useState } from 'react';
import { connect } from 'react-redux';

import history from '../../services/history';
import schema from './add-meme-validations';

function AddMeme(props) {
    const title = useFormInput('');
    const imageUrl = useFormInput('');
    const [errors, setErrors] = useState({});

    const handleRoute = (name) => (e) => {
        e.preventDefault();
        history.push(name);
    };

    return (
        <div>
            <form>
                <div className="form-container">
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

                    <div className="form-info-container">
                        <p>Tired of memes? Start a new game <button className="form-info-button"
                            onClick={handleRoute('/game')}>Here</button>.</p>
                    </div>
                </div>
            </form>
        </div>
    );

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            title,
            imageUrl,
        };
        const hasErrors = Object.keys(errors).filter(key => errors[key].length > 0);

        if (hasErrors.length === 0 && data.title && data.imageUrl) {
            console.log(props.login.userId)
            console.log(data)
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
};

function mapStateToProps(state) {
    return {
        ...state
    };
};

export default connect(mapStateToProps)(AddMeme);