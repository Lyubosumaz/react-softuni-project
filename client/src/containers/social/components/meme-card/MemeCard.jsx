import React from 'react';
import { connect } from 'react-redux';
import handleRoute from '../../../../utils/handleRoutes';
import './meme-card.css';

function MemeCard(props) {
    const memeAddedBy = props.meme.addedBy;
    const currentUser = props.userId;

    let rights = false;
    if (memeAddedBy === currentUser) {
        rights = true;
    }
    console.log(rights)

    return (
        <div className="meme-card">
            <h1>{props.meme.title}</h1>

            <div>
                <button className="meme-card-button" onClick={handleRoute(`/social/view-meme/${props.meme._id}`)}>View</button>
                {/* {rights
                    ?
                    <div>
                        <button className="meme-card-button" onClick={handleRoute(`/social/edit-meme/${props.meme._id}`)}>Edit</button>
                        <button className="meme-card-button" onClick={handleRoute(`/social/delete-meme/${props.meme._id}`)}>Delete</button>
                    <div>
                    :
                    null
                } */}
                <button className="meme-card-button edit" onClick={handleRoute(`/social/edit-meme/${props.meme._id}`)}>Edit</button>
                <button className="meme-card-button delete" onClick={handleRoute(`/social/delete-meme/${props.meme._id}`)}>Delete</button>
            </div>

            <div>
                <img src={props.meme.imageUrl} alt={props.meme.title} />
            </div>
        </div>
    );
};

function mapStateToProps(state) {
    return {
        userId: state.user.userId,
    };
};

export default connect(mapStateToProps)(MemeCard);