import { formComponent, formFieldsWrapper } from '../../../utils/class-names.json';

export default function Form({ children }) {
    return (
        <section className={`${formComponent}`}>
            <div className={`${formFieldsWrapper}`}>
                {/* TODO need to change the form component adding <form onSubmit={handleSubmit}> */}
                {children}
            </div>
        </section>
    );
}
