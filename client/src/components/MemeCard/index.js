import { Fragment } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { currentPage } from '../../utils/currentPage';
import { numberGenerator } from '../../utils/numberGenerator';
import Button from '../Button';

function MemeCard({ userId, num, meme }) {
    const currentMeme = meme;
    const currentUser = userId;

    return (
        <Fragment>
            {currentMeme && (
                <section className="meme-card">
                    <style>{`
                        .meme-card-image-wrapper.meme-order-${num}::before {
                            padding-top: ${currentMeme.imageRatio}%;
                        }
                    `}</style>
                    <header className="meme-card-header">
                        <h3>{currentMeme.title}</h3>
                    </header>

                    <div className="meme-card-buttons">
                        {currentPage() !== 'view-meme' && <Button additionalClassName="meme-card-button" buttonText="View" direction={`social/view-meme/${currentMeme._id}`} />}

                        {currentMeme.addedBy === currentUser && (
                            <Fragment key={numberGenerator()}>
                                <Button additionalClassName="meme-card-button edit" buttonText="Edit" direction={`social/edit-meme/${currentMeme._id}`} />
                                <Button additionalClassName="meme-card-button delete" buttonText="Delete" direction={`social/delete-meme/${currentMeme._id}`} />
                            </Fragment>
                        )}
                    </div>

                    <div className="meme-card-image">
                        <div className={`meme-card-image-wrapper meme-order-${num}`}>
                            <img src={currentMeme.imageUrl} className={`meme-orientation-${currentMeme.imageOrientation}`} alt={currentMeme.imageAltName} />
                        </div>
                    </div>
                </section>
            )}
        </Fragment>
    );
}

function mapStateToProps(state) {
    return {
        userId: state.user.userId,
    };
}

export default connect(mapStateToProps)(MemeCard);

MemeCard.propTypes = {
    userId: PropTypes.string.isRequired,
    num: PropTypes.number.isRequired,
    meme: PropTypes.exact({
        _id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        imageWidth: PropTypes.number.isRequired,
        imageHeight: PropTypes.number.isRequired,
        imageRatio: PropTypes.string.isRequired,
        imageOrientation: PropTypes.string.isRequired,
        imageAltName: PropTypes.string.isRequired,
        addedBy: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired,
        __v: PropTypes.number.isRequired,
    }).isRequired,
};
