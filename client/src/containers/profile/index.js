import Title from '../../components/Title';
import Profile from '../../components/Profile';
import Info from '../../components/Info';
import { containerWrapper } from '../../class-names.json';

export default function ProfileContainer() {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <Profile />
            <Info />
        </section>
    );
}
