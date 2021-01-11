import Info from '../../components/Info';
import Title from '../../components/Title';
import { containerWrapper } from '../../utils/class-names.json';

export default function PageMainLayout({ children }) {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            {children}
            <Info />
        </section>
    );
}
