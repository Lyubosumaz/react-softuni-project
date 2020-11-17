import Title from '../../components/title/Title';
import Info from '../../components/info/Info';

export default function Home() {
    return (
        <section className="component-wrapper home-component background-image">
            <Title type={'component'} />;
            <Info />
        </section>
    );
}
