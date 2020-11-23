import Title from '../../../components/Title';
import EditMeme from '../../../components/Social/EditMeme';
import Info from '../../../components/Info';
import { containerWrapper } from '../../../class-names.json';

export default function EditMemeContainer(props) {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <EditMeme memeId={props.match.params.id} />
            <Info />
        </section>
    );
}
