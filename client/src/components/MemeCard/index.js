import { Fragment, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { handleRoute } from '../../utils/history';
import { currentPage } from '../../utils/currentPage';
import numberGenerator from '../../utils/numberGenerator';
import { gcd, imageRatio, imageOrientation, imageAltName } from '../../utils/imageCalc';

function MemeCard(props) {
    const imageRef = useRef();
    const meme = props.meme;
    // const [meme, setMeme] = useState(undefined);
    const currentUser = props.userId;
    const [ratio, setRatio] = useState(0);
    const [orientation, setOrientation] = useState('');

    useEffect(() => {
        const width = imageRef.current.clientWidth;
        const height = imageRef.current.clientHeight;
        const divider = gcd(width, height);
        setRatio(imageRatio(width / divider, height / divider));
        setOrientation(imageOrientation(width, height));
    }, [ratio, orientation]);

    return (
        <Fragment>
            {console.log(meme)}
            {meme && (
                <section className="meme-card">
                    <style>{`.meme-card-image-wrapper.meme-order-${props.num}::before {
                    padding-top: ${ratio}%;
                }`}</style>
                    <header className="meme-card-header">
                        <h3>{meme.title}</h3>
                    </header>

                    <div className="meme-card-buttons">
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

                    <div className="meme-card-image">
                        <div className={`meme-card-image-wrapper meme-order-${props.num}`}>
                            <img ref={imageRef} src={meme.imageUrl} className={`meme-orientation-${orientation}`} alt={imageAltName(meme.title)} />
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
