import { PropTypes } from 'prop-types';
import ViewMeme from '../../../components/Social/ViewMeme';
import PageMainLayout from '../../../containers/PageMainLayout';

export default function ViewMemeContainer({ match }) {
    const memeId = match.params.id;

    return (
        <PageMainLayout>
            <ViewMeme memeId={memeId} />
        </PageMainLayout>
    );
}

ViewMemeContainer.propTypes = {
    match: PropTypes.object.isRequired,
};
