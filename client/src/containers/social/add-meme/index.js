import Title from '../../../components/Title';
import AddMeme from '../../../components/Social/AddMeme';
import Info from '../../../components/Info';
import { containerWrapper } from '../../../class-names.json';

export default function AddMemeContainer() {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <AddMeme />
            <Info />
        </section>
    );
}
