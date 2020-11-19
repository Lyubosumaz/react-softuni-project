import Title from '../../components/Title';
import Info from '../../components/Info';

export default function HomeContainer() {
    return (
        <section className="component-wrapper home-component background-image">
            <Title type={'component'} />
            <div className="component-data-wrapper"></div>
            <Info />
        </section>
    );
}
