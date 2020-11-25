import { useState, useEffect } from 'react';
import { httpUser } from '../../services/http';
import MainStatistic from '../MainStatistic';
import GameHistoryList from '../GameHistoryList';
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
            {profile && <GameHistoryList content={profile.gameHistory} />}
        </section>
    );
}
