import { useState, useEffect } from 'react';
import { history } from '../../../utils/history';
import { connect } from 'react-redux';
import { httpSocial } from '../../../services/http';
import { toast } from 'react-toastify';
import Title from '../../../components/Title';
import Info from '../../../components/Info';

function DeleteMeme(props) {
    const memeId = props.match.params.id;
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        httpSocial.getMeme(memeId).then((meme) => {
            setMeme(meme);
        });
    }, [memeId]);

    function handleSubmit(e) {
        e.preventDefault();
        if (props.isLogin) {
            httpSocial
                .deleteMeme(memeId)
                .then((res) => {
                    toast(res.message, {
                        type: toast.TYPE.ERROR,
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
        <div className="delete-meme-container">
            <form>
                <Title type={'component'} />

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
                    <button type="submit" className="form-action-btn delete" onClick={handleSubmit}>
                        Delete
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

export default connect(mapStateToProps)(DeleteMeme);
