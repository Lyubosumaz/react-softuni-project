import Title from '../../components/Title';
import Social from '../../components/Social';
import Info from '../../components/Info';
import { componentWrapper } from '../../className.json';

export default function SocialContainer() {
    return (
        <section className={`${componentWrapper}`}>
            <Title type={'component'} />
            <Social />
            <Info />
        </section>
    );
}
