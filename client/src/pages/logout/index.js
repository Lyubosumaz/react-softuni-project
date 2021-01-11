import Title from '../../components/Title';
import Logout from '../../components/Logout';
import Info from '../../components/Info';
import { containerWrapper } from '../../utils/class-names.json';

export default function LogoutContainer() {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <Logout />
            <Info />
        </section>
    );
}
