import Title from '../../components/Title';
import TermsAndConditions from '../../components/TermsAndConditions';
import Info from '../../components/Info';

export default function TermsAndConditionsContainer() {
    return (
        <section className="component-wrapper">
            <Title type={'component'} />
            <TermsAndConditions />
            <Info />
        </section>
    );
}
