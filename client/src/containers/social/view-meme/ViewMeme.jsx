import { useState, useEffect } from 'react';
import { httpSocial } from '../../../services/http';
import Title from '../../../components/title/Title';
import Info from '../../../components/info/Info';
import MemeCard from '../components/meme-card/MemeCard';

export default function ViewMeme(props) {
    const memeId = props.match.params.id;
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        httpSocial.getMeme(memeId).then((meme) => {
            setMeme(meme);
        });
    }, [memeId]);

    return (
        <div className="view-meme-container">
            <Title type={'component'} />

            {meme && <MemeCard meme={meme} />}

            <Info />
        </div>
    );
}
