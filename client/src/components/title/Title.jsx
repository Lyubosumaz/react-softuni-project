import { Fragment } from 'react';
import archive from './site-title-archive.json';

export default function Title(props) {
    const type = props.type;
    const currentPage = window.location.pathname.slice(1);

    function archiveReader(page, select) {
        let pathnameArr = [];
        const pathnameNesting = 1; // Change it for more in-nesting of the url

        if (page.indexOf('/') > -1) {
            pathnameArr = page.split('/');
        }

        if (Array.isArray(pathnameArr) && pathnameArr.length > 1) {
            return archive[pathnameArr[pathnameNesting]] ? archive[pathnameArr[pathnameNesting]][select] : archive.error;
        }

        return archive[page] ? archive[page][select] : archive.error;
    }

    return (
        <header className={`${type}-header`}>
            {type === 'form' ? (
                <Fragment>
                    <h1>{archiveReader(currentPage, 'title')}</h1>
                    <p>{archiveReader(currentPage, 'subtitle')}</p>
                </Fragment>
            ) : (
                <h1>{archiveReader(currentPage, 'title')}</h1>
            )}
        </header>
    );
}
