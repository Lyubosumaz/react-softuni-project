import { Fragment } from 'react';
import { connect } from 'react-redux';
import { handleRoute } from '../../../../utils/history';

function MemeCard(props) {
    const memeAddedBy = props.meme.addedBy;
    const currentUser = props.userId;

    return (
        <div className="meme-card">
            <h1>{props.meme.title}</h1>

            <div>
                <button className="meme-card-button" onClick={handleRoute(`/social/view-meme/${props.meme._id}`)}>
                    View
                </button>
                {memeAddedBy === currentUser && (
                    <Fragment>
                        <button className="meme-card-button edit" onClick={handleRoute(`/social/edit-meme/${props.meme._id}`)}>
                            Edit
                        </button>
                        <button className="meme-card-button delete" onClick={handleRoute(`/social/delete-meme/${props.meme._id}`)}>
                            Delete
                        </button>
                    </Fragment>
                )}
            </div>

            <div>
                <img src={props.meme.imageUrl} alt={props.meme.title} />
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        userId: state.user.userId,
    };
}

export default connect(mapStateToProps)(MemeCard);
