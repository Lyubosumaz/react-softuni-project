import { useEffect, useState, useRef } from 'react';

export default function Notification() {
    const testText = 'sadsadadsasdasdasda dasd a d adasdasdasd das dasdd!';
    const testTime = 2;
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        document.documentElement.style.setProperty('--notification-animation-duration', `${testTime}s`);
        autoClose();
    }, []);

    const renders = useRef(0);
    console.log('Notification times was rendered: ', renders.current++);

    function autoClose() {
        let interval = setTimeout(() => {
            // setVisible(false);
            console.log('AutoClose the Notification');
        }, testTime * 1000);

        return () => clearTimeout(interval);
    }

    function handlerClose() {
        console.log('here');
        setVisible(false);
    }

    return (
        <section className={`notification ${visible ? 'display' : 'hidden'}`}>
            <p>{testText}</p>
            <button onClick={handlerClose}>Close</button>
            <div className="progress-bar">
                <span className="bar"></span>
            </div>
        </section>
    );
}
