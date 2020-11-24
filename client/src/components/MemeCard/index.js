import { Fragment } from 'react';
import { connect } from 'react-redux';
import { handleRoute } from '../../utils/history';
import { currentPage } from '../../utils/currentPage';
import numberGenerator from '../../utils/numberGenerator';

function MemeCard(props) {
    const meme = props.meme;
    const currentUser = props.userId;

    return (
        <div className="meme-card">
            <h1>{meme.title}</h1>

            <div>
                {currentPage() !== 'view-meme' && (
                    <button className="meme-card-button" onClick={handleRoute(`/social/view-meme/${meme._id}`)}>
                        View
                    </button>
                )}

                {meme.addedBy === currentUser && (
                    <Fragment key={numberGenerator()}>
                        <button className="meme-card-button edit" onClick={handleRoute(`/social/edit-meme/${meme._id}`)}>
                            Edit
                        </button>
                        <button className="meme-card-button delete" onClick={handleRoute(`/social/delete-meme/${meme._id}`)}>
                            Delete
                        </button>
                    </Fragment>
                )}
            </div>

            <div>
                <img src={meme.imageUrl} alt={meme.title} />
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
