import Title from '../../components/Title';
import Info from '../../components/Info';
import { containerWrapper, componentData } from '../../utils/class-names.json';

export default function HomeContainer() {
    return (
        <section className={`${containerWrapper} home-component background-image`}>
            <Title />
            <section className={`${componentData}`}></section>
            <Info />
        </section>
    );
}
