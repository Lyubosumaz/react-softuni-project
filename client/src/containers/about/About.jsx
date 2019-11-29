import React from 'react';
import http from '../../services/http';

export default function About() {
    const handleTest = (e) => {
        http.User.test().then(res => console.log(res));
        http.User.test2({ name: 'test' }).then(res => console.log(res));
    }

    return (
        <div>
            <div>Hello About</div>
            <button onClick={(e) => handleTest(e)}>Submit</button>
        </div>
    );
}