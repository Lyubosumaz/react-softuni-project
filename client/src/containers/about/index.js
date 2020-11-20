import Title from '../../components/Title';
import Info from '../../components/Info';

export default function AboutContainer() {
    return (
        <section className="component-wrapper about-component background-image">
            <Title />
            <div className="component-data-wrapper"></div>
            <Info />
        </section>
    );
}
