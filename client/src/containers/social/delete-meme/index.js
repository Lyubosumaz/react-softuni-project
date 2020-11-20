import Title from '../../../components/Title';
import DeleteMeme from '../../../components/Social/DeleteMeme';
import Info from '../../../components/Info';
import { componentWrapper } from '../../../class-names.json';

export default function DeleteMemeContainer(props) {
    return (
        <section className={`${componentWrapper}`}>
            <Title />
            <DeleteMeme memeId={props.match.params.id} />
            <Info />
        </section>
    );
}
