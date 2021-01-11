import { PropTypes } from 'prop-types';
import Title from '../../../components/Title';
import ViewMeme from '../../../components/Social/ViewMeme';
import Info from '../../../components/Info';
import { containerWrapper } from '../../../utils/class-names.json';

export default function ViewMemeContainer({ match }) {
    const memeId = match.params.id;

    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <ViewMeme memeId={memeId} />
            <Info />
        </section>
    );
}

ViewMemeContainer.propTypes = {
    match: PropTypes.object.isRequired,
};
