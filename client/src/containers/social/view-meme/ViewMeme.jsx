import { useState, useEffect } from 'react';
import http from '../../../services/http';
import handleRoute from '../../../utils/handleRoutes';
import MemeCard from '../components/meme-card/MemeCard';

export default function ViewMeme(props) {
    const memeId = props.match.params.id;
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        http.Social.getMeme(memeId).then((meme) => {
            setMeme(meme);
        });
    }, []);

    return (
        <div className="view-meme-container">
            <h1>View Meme</h1>

            {meme && <MemeCard meme={meme} />}

            <div className="info-container">
                <p>
                    Add Meme or just watch others memes{' '}
                    <button className="info-button" onClick={handleRoute('/social')}>
                        Back
                    </button>
                    .
                </p>
            </div>
        </div>
    );
}
