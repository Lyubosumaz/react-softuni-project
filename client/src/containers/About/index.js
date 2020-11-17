import Title from '../../components/Title';
import Info from '../../components/Info';

export default function About() {
    return (
        <section className="component-wrapper about-component background-image">
            <Title type={'component'} />
            <Info />
        </section>
    );
}
