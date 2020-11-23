import Title from '../../../components/Title';
import DeleteMeme from '../../../components/Social/DeleteMeme';
import Info from '../../../components/Info';
import { containerWrapper } from '../../../class-names.json';

export default function DeleteMemeContainer(props) {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <DeleteMeme memeId={props.match.params.id} />
            <Info />
        </section>
    );
}
