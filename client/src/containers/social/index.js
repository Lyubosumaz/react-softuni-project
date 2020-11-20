import Title from '../../components/Title';
import Social from '../../components/Social';
import Info from '../../components/Info';
import { componentWrapper } from '../../class-names.json';

export default function SocialContainer() {
    return (
        <section className={`${componentWrapper}`}>
            <Title />
            <Social />
            <Info />
        </section>
    );
}
