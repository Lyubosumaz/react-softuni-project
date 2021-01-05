import Title from '../../components/Title';
import Social from '../../components/Social';
import Info from '../../components/Info';
import { containerWrapper } from '../../utils/class-names.json';

export default function SocialContainer() {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <Social />
            <Info />
        </section>
    );
}
