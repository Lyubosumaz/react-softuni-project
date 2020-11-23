import Title from '../../../components/Title';
import ViewMeme from '../../../components/Social/ViewMeme';
import Info from '../../../components/Info';
import { containerWrapper } from '../../../class-names.json';

export default function ViewMemeContainer(props) {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <ViewMeme memeId={props.match.params.id} />
            <Info />
        </section>
    );
}
