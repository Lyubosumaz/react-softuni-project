import Title from '../../components/title/Title';
import Info from '../../components/info/Info';

export default function About() {
    return (
        <section className="component-wrapper about-component background-image">
            <Title type={'component'} />
            <Info />
        </section>
    );
}
