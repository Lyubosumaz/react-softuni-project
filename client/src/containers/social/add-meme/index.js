import Title from '../../../components/Title';
import AddMeme from '../../../components/Social/AddMeme';
import Info from '../../../components/Info';
import { componentWrapper } from '../../../class-names.json';

export default function AddMemeContainer() {
    return (
        <section className={`${componentWrapper}`}>
            <Title type={'component'} />
            <AddMeme />
            <Info />
        </section>
    );
}
