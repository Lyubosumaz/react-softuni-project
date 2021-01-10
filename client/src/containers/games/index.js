import Info from '../../components/Info';
import Title from '../../components/Title';
import { buttonClass, containerWrapper } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';

export default function GamesContainer() {
    return (
        <section className={`${containerWrapper}`}>
            <Title />
            <p>In progress... Quick prevue of first game here: {factoryButtons({ buttonStyles: buttonClass.Games })('game', 'Forest Runner')}</p>
            <Info />
        </section>
    );
}
