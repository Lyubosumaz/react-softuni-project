import { connect } from 'react-redux';
import { useEffect, useState, useRef, Fragment } from 'react';

function Notification(props) {
    console.log(props);
    const notif = props.notifications;
    const testText = props.msg;
    const testTime = 2;
    const [visible, setVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);

    useEffect(() => {
        document.documentElement.style.setProperty('--notification-animation-duration', `${testTime}s`);
        setVisible(true);
        setNotifications(notif);
        console.log(notifications);
        autoClose();
    }, [notif]);

    const renders = useRef(0);
    console.log('Notification times was rendered: ', renders.current++);

    function autoClose() {
        let interval = setTimeout(() => {
            setVisible(false);
            console.log('AutoClose the Notification');
        }, testTime * 1000);

        return () => clearTimeout(interval);
    }

    function handlerClose() {
        console.log('here');
        setVisible(false);
    }

    return (
        <Fragment>
            <ul className={`notification`}>
                {notifications &&
                    notifications.map((notification, index) => {
                        console.log(notification, index);
                        return (
                            <li key={index}>
                                <p>{notification.msg}</p>
                                <button onClick={handlerClose}>Close</button>
                                <div className="progress-bar">
                                    <span className="bar"></span>
                                </div>
                            </li>
                        );
                    })}
            </ul>
        </Fragment>
    );
}

function mapStateToProps(state) {
    return {
        notifications: state.notification.notifications,
    };
}

export default connect(mapStateToProps)(Notification);
