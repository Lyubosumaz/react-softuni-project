import { useState, useEffect } from 'react';
import { history } from '../../../utils/history';
import { connect } from 'react-redux';
import { httpSocial } from '../../../services/http';
import { toastSuccess, toastError } from '../../../utils/toastHandler';
import { componentData } from '../../../class-names.json';
import Button from '../../Button';

function DeleteMeme(props) {
    const memeId = props.memeId;
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        httpSocial.getMeme(memeId).then((meme) => {
            setMeme(meme);
        });
    }, [memeId]);

    function handleDelete(e) {
        e.preventDefault();
        if (props.isLogin) {
            httpSocial
                .deleteMeme(memeId)
                .then((res) => {
                    toastSuccess(res);
                    history.push('/social');
                })
                .catch((err) => {
                    toastError(err);
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

export default connect(mapStateToProps)(DeleteMeme);
