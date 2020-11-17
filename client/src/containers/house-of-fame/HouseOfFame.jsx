import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { httpUser } from '../../services/http';
import { handleRoute } from '../../utils/history';
import HouseOfFameCard from './components/HouseOfFameCard';
import Title from '../../components/title/Title';

function HouseOfFame(props) {
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
            <Title type={'component'} />

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

            <div className="info-container">
                {props.isLogin ? (
                    <p>
                        You saw what you need. Now join the game{' '}
                        <button className="info-button" onClick={handleRoute('/games')}>
                            Here
                        </button>
                        !
                    </p>
                ) : (
                    <p>
                        Join the race, climb ladder and be the top apex legend{' '}
                        <button className="info-button" onClick={handleRoute('/login')}>
                            Sign in
                        </button>
                        .
                    </p>
                )}
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        isLogin: state.user.isLogin,
    };
}

export default connect(mapStateToProps)(HouseOfFame);
