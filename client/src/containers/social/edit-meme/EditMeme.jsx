import { useState, useEffect } from 'react';
import history from '../../../utils/history';
import { connect } from 'react-redux';
import http from '../../../services/http';
import handleRoute from '../../../utils/handleRoutes';
import { toast } from 'react-toastify';
import schema from './edit-meme-validations';
import Title from '../../../components/title/Title';
import Info from '../../../components/info/Info';

function EditMeme(props) {
    const memeId = props.match.params.id;
    const [meme, setMeme] = useState(null);
    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errors, setErrors] = useState({});

    useEffect(() => {
        http.Social.getMeme(memeId).then((meme) => {
            setMeme(meme);
            setTitle(meme.title);
            setImageUrl(meme.imageUrl);
        });
    }, [memeId]);

    function handleTitle(event) {
        setTitle(event.target.value);
        validate(event);
    }

    function handleInputUrl(event) {
        setImageUrl(event.target.value);
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

    function handleSubmit(e) {
        e.preventDefault();
        const data = {
            id: memeId,
            title,
            imageUrl,
        };
        const hasErrors = Object.keys(errors).filter((key) => errors[key].length > 0);

        if (hasErrors.length === 0 && data.title && data.imageUrl && props.isLogin) {
            http.Social.editMeme(data)
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
    }

    return (
        <div className="edit-meme-container">
            <form>
                <Title type={'component'} />

                <div className="form-div-container">
                    <label htmlFor="Title">
                        <b>Title:</b>
                    </label>
                    {meme && <input type="text" placeholder="Write some funny title" className="form-input" id="title" onChange={handleTitle} value={title} />}
                    {errors.title && <div className="form-input-error">{errors.title[0]}</div>}
                </div>

                <div className="form-div-container">
                    <label htmlFor="imageUrl">
                        <b>imageUrl:</b>
                    </label>
                    {meme && <input type="text" placeholder="Copy and Paste your memeURL here" className="form-input" id="imageUrl" onChange={handleInputUrl} value={imageUrl} />}
                    {errors.imageUrl && <div className="form-input-error">{errors.imageUrl[0]}</div>}
                </div>

                <div>
                    <button type="submit" className="form-action-btn" onClick={handleSubmit}>
                        Edit
                    </button>
                </div>

                <Info />
            </form>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
    };
}

export default connect(mapStateToProps)(EditMeme);
