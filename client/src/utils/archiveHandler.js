import currentPage from './currentPage';

function archiveValidator(archive) {
    return archive[currentPage()] ? Object.keys(archive[currentPage()]).length > 1 : false;
}

function archiveReader(archive, select) {
    return archive[currentPage()] ? archive[currentPage()][select] : archive.error;
}

export { archiveValidator, archiveReader };
