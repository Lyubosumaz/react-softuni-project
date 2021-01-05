import { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { httpSocial } from '../../../services/http';
import MemeCard from '../../MemeCard';
import { componentData } from '../../../utils/class-names.json';

export default function ViewMeme({ memeId }) {
    const memeIdProps = memeId;
    const [meme, setMeme] = useState(null);

    useEffect(() => {
        httpSocial.getMeme(memeIdProps).then((meme) => {
            setMeme(meme);
        });
    }, [memeIdProps]);

    return <section className={`${componentData}`}>{meme && <MemeCard num={0} meme={meme} />}</section>;
}

ViewMeme.propTypes = {
    memeId: PropTypes.string.isRequired,
};
