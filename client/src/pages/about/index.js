import Title from '../../components/Title';
import Info from '../../components/Info';
import { containerWrapper, componentData } from '../../utils/class-names.json';

export default function AboutContainer() {
    return (
        <section className={`${containerWrapper} about-component background-image`}>
            <Title />
            <section className={`${componentData}`}></section>
            <Info />
        </section>
    );
}
