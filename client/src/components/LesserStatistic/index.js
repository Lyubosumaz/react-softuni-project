import secondsToClock from '../../utils/secondsToClock';
import gameRank from '../../assets/images/game_rank.png';

export default function LesserStatistic(props) {
    return (
        <div className="list-card-container">
            <div>
                <img src={gameRank} alt="Rank" />
            </div>

            <div>
                <span>{/* <b>Level: {props.data.level}</b> */}</span>
                <div className="list-card-stats">
                    <div>
                        <p>{/* <b>Your time is: {secondsToClock(props.data.time)}</b> */}</p>
                    </div>
                    <div>
                        <p>{/* <b>Collected gold: {props.data.gold}</b> */}</p>
                    </div>
                    <div>
                        <p>{/* <b>Loot: {props.data.loot}</b> */}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
