import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';
import PageMainLayout from '../../containers/PageMainLayout';

export default function GamesContainer() {
    return (
        <PageMainLayout>
            {/* TODO adding carousel for the many games */}
            <p>In progress... Quick prevue of first game here: {factoryButtons({ buttonStyles: buttonClass.Games })('game', 'Forest Runner')}</p>
        </PageMainLayout>
    );

    // <section className={`${containerWrapper}`}>
    //     <Title />
    //     {/* TODO adding carousel for the many games */}
    //     <p>In progress... Quick prevue of first game here: {factoryButtons({ buttonStyles: buttonClass.Games })('game', 'Forest Runner')}</p>
    //     <Info />
    // </section>
}
