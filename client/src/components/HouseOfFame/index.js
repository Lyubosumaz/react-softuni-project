import { useState, useEffect } from 'react';
import { httpUser } from '../../services/http';
import HouseOfFameCard from './components/HouseOfFameCard';
import Title from '../../components/Title';
import Info from '../../components/Info';

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
        <div className="house-container">
            <Title />

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
                            return <HouseOfFameCard key={index} data={data} />;
                        })}
            </div>

            <Info />
        </div>
    );
}
