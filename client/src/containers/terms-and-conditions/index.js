import Title from '../../components/Title';
import TermsAndConditions from '../../components/TermsAndConditions';
import Info from '../../components/Info';
import { containerWrapper } from '../../class-names.json';

export default function TermsAndConditionsContainer() {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <TermsAndConditions />
            <Info />
        </section>
    );
}
