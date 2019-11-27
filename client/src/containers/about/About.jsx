import React from 'react';
import http from '../../services/http';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

export default function About() {
    const handleTest = (e) => {
        e.preventDefault();

        http.User.test().then(res => console.log(res));
    }


    return (
        <div>
            <div>Hello About</div>
            <button onClick={(e) => handleTest(e)}>Submit</button>
        </div>
    );
}