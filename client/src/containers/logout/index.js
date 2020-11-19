import Title from '../../components/Title';
import Logout from '../../components/Logout';
import Info from '../../components/Info';

export default function LogoutContainer() {
    return (
        <section className="component-wrapper">
            <Title type={'component'} />
            <Logout />
            <Info />
        </section>
    );
}
