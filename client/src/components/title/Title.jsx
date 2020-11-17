import { Fragment } from 'react';
import archive from './site-titles-archive.json';

export default function Title(props) {
    const type = props.type;
    const currentPage = window.location.pathname.slice(1);

    function archiveReader(page, select) {
        return archive[page][select];
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
