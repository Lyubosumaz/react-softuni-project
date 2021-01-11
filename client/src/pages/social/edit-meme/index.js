import { PropTypes } from 'prop-types';
import EditMeme from '../../../components/Social/EditMeme';
import PageMainLayout from '../../../layouts/PageMain';

export default function EditMemeContainer({ match }) {
    const memeId = match.params.id;

    return (
        <PageMainLayout>
            <EditMeme memeId={memeId} />
        </PageMainLayout>
    );
}

EditMemeContainer.propTypes = {
    match: PropTypes.object.isRequired,
};
