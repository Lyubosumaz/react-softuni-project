import Title from '../../components/Title';
import Info from '../../components/Info';
import { containerWrapper } from '../../utils/class-names.json';

export default function GamesContainer() {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <p>In progress...</p>
            <Info />
        </section>
    );
}
