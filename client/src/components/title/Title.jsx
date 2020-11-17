import { Fragment } from 'react';
import { archiveValidator, archiveReader } from '../../utils/archiveHandler';
import archive from './site-title-archive.json';

export default function Title(props) {
    const type = props.type;

    return (
        <header className={`${type}-header`}>
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
