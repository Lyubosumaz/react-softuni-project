import { useState, useEffect } from 'react';
import { httpUser } from '../../services/http';
import GameHistoryCard from './components/GameHistoryCard';
import { componentData } from '../../class-names.json';

import MainStatistic from '../MainStatistic';

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
                            return <GameHistoryCard key={index} data={data} />;
                        })}
            </div>
        </section>
    );
}
