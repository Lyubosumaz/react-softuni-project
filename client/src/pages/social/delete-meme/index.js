import { PropTypes } from 'prop-types';
import DeleteMeme from '../../../components/Social/DeleteMeme';
import PageMainLayout from '../../../layouts/PageMain';

export default function DeleteMemeContainer({ match }) {
    const memeId = match.params.id;

    return (
        <PageMainLayout>
            <DeleteMeme memeId={memeId} />
        </PageMainLayout>
    );
}

DeleteMemeContainer.propTypes = {
    match: PropTypes.object.isRequired,
};
