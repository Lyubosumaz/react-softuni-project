import { useState, useEffect } from 'react';
import { httpSocial } from '../../../services/http';
import MemeCard from '../../MemeCard';
import { componentData } from '../../../class-names.json';

export default function ViewMeme(props) {
    const memeId = props.memeId;
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        httpSocial.getMeme(memeId).then((meme) => {
            setMeme(meme);
        });
    }, [memeId]);

    return <section className={`${componentData}`}>{meme && <MemeCard meme={meme} />}</section>;
}
