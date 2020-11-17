import { Fragment } from 'react';
import archive from './site-title-archive.json';

export default function Title(props) {
    const type = props.type;
    const pathnameNesting = 1; // Change it for more in-nesting of the url

    function getCurrentPage() {
        const currentPathname = window.location.pathname.slice(1);

        if (currentPathname.indexOf('/') > -1) {
            const pathnameArr = currentPathname.split('/');

            if (Array.isArray(pathnameArr) && pathnameArr.length > 1) {
                return pathnameArr[pathnameNesting];
            }
        }

        return currentPathname;
    }

    function archiveValidator() {
        return Object.keys(archive[getCurrentPage()]).length > 1;
    }

    function archiveReader(select) {
        return archive[getCurrentPage()] ? archive[getCurrentPage()][select] : archive.error;
    }

    return (
        <header className={`${type}-header`}>
            {archiveValidator() ? (
                <Fragment>
                    <h1>{archiveReader('title')}</h1>
                    <p>{archiveReader('subtitle')}</p>
                </Fragment>
            ) : (
                <h1>{archiveReader('title')}</h1>
            )}
        </header>
    );
}
