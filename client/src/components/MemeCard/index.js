import { Fragment } from 'react';
import { connect } from 'react-redux';
import { currentPage } from '../../utils/currentPage';
import { numberGenerator } from '../../utils/numberGenerator';
import Button from '../Button';

function MemeCard(props) {
    const meme = props.meme;
    const currentUser = props.userId;

    return (
        <Fragment>
            {meme && (
                <section className="meme-card">
                    <style>{`
                        .meme-card-image-wrapper.meme-order-${props.num}::before {
                            padding-top: ${meme.imageRatio}%;
                        }
                    `}</style>
                    <header className="meme-card-header">
                        <h3>{meme.title}</h3>
                    </header>

                    <div className="meme-card-buttons">
                        {currentPage() !== 'view-meme' && <Button additionalClassName="meme-card-button" buttonText="View" direction={`social/view-meme/${meme._id}`} />}

                        {meme.addedBy === currentUser && (
                            <Fragment key={numberGenerator()}>
                                <Button additionalClassName="meme-card-button edit" buttonText="Edit" direction={`social/edit-meme/${meme._id}`} />
                                <Button additionalClassName="meme-card-button delete" buttonText="Delete" direction={`social/delete-meme/${meme._id}`} />
                            </Fragment>
                        )}
                    </div>

                    <div className="meme-card-image">
                        <div className={`meme-card-image-wrapper meme-order-${props.num}`}>
                            <img src={meme.imageUrl} className={`meme-orientation-${meme.imageOrientation}`} alt={meme.imageAltName} />
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
