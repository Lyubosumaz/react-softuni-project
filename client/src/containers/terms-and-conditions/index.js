import Title from '../../components/Title';
import TermsAndConditions from '../../components/TermsAndConditions';
import Info from '../../components/Info';
import { componentWrapper } from '../../class-names.json';

export default function TermsAndConditionsContainer() {
    return (
        <section className={`${componentWrapper}`}>
            <Title type={'component'} />
            <TermsAndConditions />
            <Info />
        </section>
    );
}
