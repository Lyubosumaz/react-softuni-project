import { Fragment } from 'react';
import { currentPageClass } from '../../utils/pathHandler';
import { archiveValidator, archiveReader } from '../../utils/archiveHandler';
import archive from './site-title-archive.json';

export default function Title() {
    return (
        <header className={`${currentPageClass()}-header`}>
            {archiveValidator(archive) ? (
                <Fragment>
                    <h1>{archiveReader(archive, 'title')}</h1>
                    <p>{archiveReader(archive, 'subtitle')}</p>
                </Fragment>
            ) : (
                <h1>{archiveReader(archive, 'title')}</h1>
            )}
        </header>
    );
}
