import Title from '../../components/Title';
import HouseOfFame from '../../components/HouseOfFame';
import Info from '../../components/Info';

export default function HouseOfFameContainer() {
    return (
        <div className="house-container">
            <Title type={'component'} />
            <HouseOfFame />
            <Info />
        </div>
    );
}
