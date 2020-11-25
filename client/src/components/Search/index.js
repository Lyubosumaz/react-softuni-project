import { useState, useEffect } from 'react';

export default function Search({ fieldName, arr, callback }) {
    const defaultArrayCopy = arr.slice(0);
    const [search, setSearch] = useState('');

    function handleSearch(e) {
        setSearch(e.target.value);
    }

    function returnSortedArray() {
        callback(
            defaultArrayCopy.filter((el) => {
                return el.user.username.toLowerCase().includes(search.toLowerCase());
            })
        );
    }

    function resetToDefaultArray() {
        callback(defaultArrayCopy);
    }

    useEffect(() => {
        search ? returnSortedArray() : resetToDefaultArray();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [search]);

    return (
        <section className="search-component">
            <p>{fieldName}:</p>
            <input type="text" className="search-component-field" onChange={handleSearch} placeholder="Search.."></input>
        </section>
    );
}
