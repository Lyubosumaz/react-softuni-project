import { useState, useEffect } from 'react';
import { httpUser } from '../../services/http';
import MainStatistic from '../MainStatistic';
import GameRankCard from '../GameRankCard';
import { componentData } from '../../class-names.json';

export default function Profile() {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        httpUser.profile().then((gameProfile) => {
            setProfile(gameProfile);
        });
    }, []);

    return (
        <section className={`${componentData}`}>
            {profile && <MainStatistic content={profile} />}

            <div className="profile-game-history">
                {profile &&
                    profile.gameHistory
                        .slice(0)
                        .reverse()
                        .map((data, index) => {
                            return <GameRankCard key={index} data={data} />;
                        })}
            </div>
        </section>
    );
}
