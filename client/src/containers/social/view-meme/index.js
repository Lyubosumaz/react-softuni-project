import Title from '../../../components/Title';
import ViewMeme from '../../../components/Social/ViewMeme';
import Info from '../../../components/Info';
import { componentWrapper } from '../../../class-names.json';

export default function ViewMemeContainer(props) {
    return (
        <section className={`${componentWrapper}`}>
            <Title type={'component'} />
            <ViewMeme memeId={props.match.params.id} />
            <Info />
        </section>
    );
}
