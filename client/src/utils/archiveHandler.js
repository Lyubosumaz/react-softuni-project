import { currentPage } from './pathHandler';

export function archiveValidator(archive) {
    return archive[currentPage()] ? Object.keys(archive[currentPage()]).length > 1 : false;
}

export function archiveReader(archive, select) {
    return archive[currentPage()] ? archive[currentPage()][select] : archive.error;
}

export function archiveReaderState(archive, select, state) {
    switch (state) {
        case 'logged':
            return archive[currentPage()].logged ? archive[currentPage()].logged[select] : archive[currentPage()].default ? archive[currentPage()].default[select] : archive.error;

        default:
            return archive[currentPage()].default ? archive[currentPage()].default[select] : archive.error;
    }
}
