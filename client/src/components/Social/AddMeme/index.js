import { useState } from 'react';
import { history } from '../../../utils/history';
import { connect } from 'react-redux';
import { httpSocial } from '../../../services/http';
import { getImage, gcd, imageRatio, imageOrientation, imageAltName } from '../../../utils/imageCalc';
import schema from './add-meme-validations';
import { setNotification } from '../../Notification/actions';
import { componentData } from '../../../class-names.json';
import Button from '../../Button';

function AddMeme(props) {
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

        // if (hasErrors.length === 0 && meme.title && meme.imageUrl && props.isLogin) {
        //     httpSocial
        //         .addMeme(meme)
        //         .then((res) => {
        //             props.setNotificationSuccess(res);
        //             history.push('/social');
        //         })
        //         .catch((err) => {
        //             props.setNotificationError(err);
        //         });
        // }
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
        <section className={`${componentData}`}>
            <form>
                <div className="form-div-container">
                    <label htmlFor="Title">
                        <b>Title:</b>
                    </label>
                    <input type="text" placeholder="Write some funny title" className="form-input" id="title" onChange={useFormInput} {...title} />
                    {errors.title && <div className="form-input-error">{errors.title[0]}</div>}
                </div>

                <div className="form-div-container">
                    <label htmlFor="imageUrl">
                        <b>imageUrl:</b>
                    </label>
                    <input type="text" placeholder="Copy and Paste your memeURL here" className="form-input" id="imageUrl" onChange={useFormInput} {...imageUrl} />
                    {errors.imageUrl && <div className="form-input-error">{errors.imageUrl[0]}</div>}
                </div>

                <div>
                    <Button additionalClassName="form-action-btn" buttonText="Submit" functionPressButton={handleSubmit} />
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

export default connect(mapStateToProps, mapDispatchToProps)(AddMeme);
