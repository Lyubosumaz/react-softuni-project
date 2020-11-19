import Title from '../../components/Title';
import Info from '../../components/Info';

export default function GamesContainer() {
    return (
        <div className="games-container">
            <Title type={'component'} />
            <p>In progress...</p>
            <Info />
        </div>
    );
}