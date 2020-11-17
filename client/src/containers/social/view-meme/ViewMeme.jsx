import { useState, useEffect } from 'react';
import http from '../../../services/http';
import handleRoute from '../../../utils/handleRoutes';
import Title from '../../../components/title/Title';
import MemeCard from '../components/meme-card/MemeCard';

export default function ViewMeme(props) {
    const memeId = props.match.params.id;
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        http.Social.getMeme(memeId).then((meme) => {
            setMeme(meme);
        });
    }, [memeId]);

    return (
        <div className="view-meme-container">
            <Title type={'component'} />

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
