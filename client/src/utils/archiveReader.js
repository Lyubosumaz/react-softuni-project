import currentPage from './currentPage';

export default function archiveReader(archive, select) {
    return archive[currentPage()] ? archive[currentPage()][select] : archive.error;
}
