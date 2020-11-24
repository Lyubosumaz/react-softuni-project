import { useState, useEffect } from 'react';
import { httpUser } from '../../services/http';
import GameRankCard from '../GameRankCard';
import { componentData } from '../../class-names.json';

export default function HouseOfFame() {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [searchBool, setSearchBool] = useState(false); // need reworking

    useEffect(() => {
        httpUser.house().then((allUsers) => {
            setUsers((users) => [...users, ...allUsers]);
        });
    }, []);

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    // TODO
    useEffect(() => {
        setSearchBool((searchBool) => (searchBool = true));

        if (!users) {
            return;
        }

        setUsers((users) => [
            ...users.filter((u) => {
                return u.user.username.toLowerCase().includes(search.toLowerCase());
            }),
        ]);

        if (searchBool && search === '') {
            httpUser.house().then((allUsers) => {
                setUsers(allUsers);
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return (
        <section className={`${componentData}`}>
            <p className="house-of-fame-search-p">
                <b>Username: </b>
                <input type="text" className="my-search" onChange={handleSearch} placeholder="Search.."></input>
            </p>

            <div>
                {users &&
                    users
                        .sort((a, b) => {
                            return b.totalGames - a.totalGames;
                        })
                        .map((data, index) => {
                            return <GameRankCard key={index} data={data} />;
                        })}
            </div>
        </section>
    );
}
