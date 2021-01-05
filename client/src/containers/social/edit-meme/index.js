import { PropTypes } from 'prop-types';
import Title from '../../../components/Title';
import EditMeme from '../../../components/Social/EditMeme';
import Info from '../../../components/Info';
import { containerWrapper } from '../../../utils/class-names.json';

export default function EditMemeContainer({ match }) {
    const memeId = match.params.id;

    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <EditMeme memeId={memeId} />
            <Info />
        </section>
    );
}

EditMemeContainer.propTypes = {
    match: PropTypes.object.isRequired,
};
