import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import http from '../../services/http';
import handleRoute from '../../utils/handleRoutes';
import HouseOfFameCard from './components/HouseOfFameCard';
import './house-of-fame.css';

function HouseOfFame(props) {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        http.User.house().then((allUsers) => {
            setUsers([...users, ...allUsers]);
        });
    });

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    useEffect(() => {
        if (!users) {
            return;
        }

        setUsers(
            users.filter((u) => {
                return u.user.username.toLowerCase().includes(search.toLowerCase());
            })
        );

        if (search === '') {
            http.User.house().then((allUsers) => {
                setUsers([...users, ...allUsers]);
            });
        }
    }, [users, search]);

    return (
        <div className="house-container">
            <h1>House of Fame</h1>

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
