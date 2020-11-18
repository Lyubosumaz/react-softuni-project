import { handleRoute } from '../../utils/history';
import { archiveReader } from '../../utils/archiveHandler';
import archive from './site-info-archive.json';

export default function Info() {
    return (
        <section className="info-component">
            <span>{archiveReader(archive, 'text')}</span>
            <button className="info-action-btn" onClick={handleRoute(archiveReader(archive, 'path'))}>
                {archiveReader(archive, 'button')}
            </button>
        </section>
    );
}
