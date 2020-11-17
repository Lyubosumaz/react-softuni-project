import handleRoute from '../../utils/handleRoutes';
import archiveReader from '../../utils/archiveReader';
import archive from './site-info-archive.json';

export default function Info() {
    return (
        <section className="info-component">
            <span>{archiveReader(archive, 'text')}</span>
            <button className="info-action-btn " onClick={handleRoute(archiveReader(archive, 'path'))}>
                {archiveReader(archive, 'button')}
            </button>
        </section>
    );
}
