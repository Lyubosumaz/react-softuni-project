import Title from '../../components/Title';
import Register from '../../components/Register';
import Info from '../../components/Info';
import { containerWrapper } from '../../utils/class-names.json';

export default function RegisterContainer() {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <Register />
            <Info />
        </section>
    );
}
