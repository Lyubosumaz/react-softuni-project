import { Fragment, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { currentPage } from '../../utils/currentPage';
import numberGenerator from '../../utils/numberGenerator';
import { gcd, imageRatio, imageOrientation, imageAltName } from '../../utils/imageCalc';
import Button from '../Button';

function MemeCard(props) {
    const meme = props.meme;
    // console.log(props.meme);
    const currentUser = props.userId;
    const imageRef = useRef();
    const [ratio, setRatio] = useState(0);
    const [orientation, setOrientation] = useState('');

    useEffect(() => {
        const width = imageRef.current.clientWidth;
        const height = imageRef.current.clientHeight;
        console.log('-------------', width, height);
        const divider = gcd(width, height);
        setRatio(imageRatio(width / divider, height / divider));
        setOrientation(imageOrientation(width, height));
    }, []);

    return (
        <Fragment>
            {meme && (
                <section className="meme-card">
                    <style>{`.meme-card-image-wrapper.meme-order-${props.num}::before {
                    padding-top: ${ratio}%;
                }`}</style>
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
