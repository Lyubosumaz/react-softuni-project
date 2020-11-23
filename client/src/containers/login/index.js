import Title from '../../components/Title';
import Login from '../../components/Login';
import Info from '../../components/Info';
import { containerWrapper } from '../../class-names.json';

export default function LoginContainer() {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <Login />
            <Info />
        </section>
    );
}
