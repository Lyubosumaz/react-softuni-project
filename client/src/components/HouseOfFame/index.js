import { useState, useEffect } from 'react';
import { httpUser } from '../../services/http';
import Search from '../Search';
import GameHistoryList from '../GameHistoryList';
import { componentData } from '../../utils/class-names.json';

export default function HouseOfFame() {
    const [usersDefault, setUsersDefault] = useState([]);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        httpUser.house().then((allUsers) => {
            setUsersDefault(allUsers);
            setUsers(allUsers);
        });
    }, []);

    function handleCallBack(sortedArr) {
        setUsers(sortedArr);
    }

    return (
        <section className={`${componentData}`}>
            {usersDefault.length && <Search fieldName={'Username'} arr={usersDefault} callback={handleCallBack} />}
            {users && <GameHistoryList content={users} />}
        </section>
    );
}
