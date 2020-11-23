import Title from '../../components/Title';
import HouseOfFame from '../../components/HouseOfFame';
import Info from '../../components/Info';
import { containerWrapper } from '../../class-names.json';

export default function HouseOfFameContainer() {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <HouseOfFame />
            <Info />
        </section>
    );
}
