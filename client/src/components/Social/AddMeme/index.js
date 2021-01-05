import { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { history } from '../../../utils/history';
import { httpSocial } from '../../../services/http';
import { getImage, gcd, imageRatio, imageOrientation, imageAltName } from '../../../utils/imageCalc';
import schema from './add-meme-validations';
import { setNotification } from '../../Notification/actions';
import { formComponent, formFieldsWrapper } from '../../../class-names.json';

function AddMeme({ isLogin, setNotificationSuccess, setNotificationError }) {
    const isLogged = isLogin;
    const title = useFormInput('');
    const imageUrl = useFormInput('');
    const [errors, setErrors] = useState({});

    async function handleSubmit(e) {
        e.preventDefault();

        if (!title.value || !imageUrl.value) {
            return;
        }

        const meme = {
            title: title.value,
            imageUrl: imageUrl.value,
        };

        const image = await getImage(meme.imageUrl);
        const width = image.width;
        const height = image.height;
        meme.imageWidth = width;
        meme.imageHeight = height;

        const divider = gcd(width, height);
        meme.imageRatio = imageRatio(width, height, divider);
        meme.imageOrientation = imageOrientation(width, height);
        meme.imageAltName = imageAltName(title.value);

        console.log(meme);

        const hasErrors = Object.keys(errors).filter((key) => errors[key].length > 0);

        if (hasErrors.length === 0 && meme.title && meme.imageUrl && isLogged) {
            httpSocial
                .addMeme(meme)
                .then((res) => {
                    setNotificationSuccess(res);
                    history.push('/social');
                })
                .catch((err) => {
                    setNotificationError(err);
                });
        }
    }

    function useFormInput(initialValue) {
        const [value, setValue] = useState(initialValue);

        function handleChange(event) {
            setValue(event.target.value);
            validate(event);
        }

        function validate(event) {
            const name = event.target.id;

            schema.fields[name]
                .validate(event.target.value, { abortEarly: false })
                .then(() => {
                    setErrors({ ...errors, [name]: [] });
                })
                .catch((err) => {
                    setErrors({ ...errors, [name]: err.errors });
                });
        }

        return { value, onChange: handleChange };
    }

    return (
        <section className={`${formComponent}`}>
            <div className={`${formFieldsWrapper}`}>
                <form onSubmit={handleSubmit}>
                    <div className="form-field">
                        <label htmlFor="Title">
                            <span>Title:</span>
                        </label>

                        <input type="text" placeholder="Write some funny title" className="form-input" id="title" {...title} />

                        {Array.isArray(errors.title) && errors.title[0] ? (
                            <div className="form-error-message">
                                <span>{errors.title[0]}</span>
                            </div>
                        ) : (
                            <div className="form-error-container">
                                <span>Error Container</span>
                            </div>
                        )}
                    </div>

                    <div className="form-field">
                        <label htmlFor="imageUrl">
                            <span>imageUrl:</span>
                        </label>

                        <input type="text" placeholder="Copy and Paste your memeURL here" className="form-input" id="imageUrl" {...imageUrl} />

                        {Array.isArray(errors.imageUrl) && errors.imageUrl[0] ? (
                            <div className="form-error-message">
                                <span>{errors.imageUrl[0]}</span>
                            </div>
                        ) : (
                            <div className="form-error-container">
                                <span>Error Container</span>
                            </div>
                        )}
                    </div>

                    <div className="form-field-buttons">
                        <input type="reset" className="form-action-btn" value="reset" />
                        <input type="submit" className="form-action-btn" value="add meme" />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddMeme);

AddMeme.propTypes = {
    isLogin: PropTypes.bool.isRequired,
    setNotificationSuccess: PropTypes.func.isRequired,
    setNotificationError: PropTypes.func.isRequired,
};
