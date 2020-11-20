import { currentPage } from './currentPage';

function archiveValidator(archive) {
    return archive[currentPage()] ? Object.keys(archive[currentPage()]).length > 1 : false;
}

function archiveReader(archive, select) {
    return archive[currentPage()] ? archive[currentPage()][select] : archive.error;
}

function archiveReaderState(archive, select, state) {
    switch (state) {
        case 'logged':
            return archive[currentPage()].logged ? archive[currentPage()].logged[select] : archive[currentPage()].default ? archive[currentPage()].default[select] : archive.error;

        default:
            return archive[currentPage()].default ? archive[currentPage()].default[select] : archive.error;
    }
}

export { archiveValidator, archiveReader, archiveReaderState };
