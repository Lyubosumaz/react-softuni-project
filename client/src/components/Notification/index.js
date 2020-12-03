import { connect } from 'react-redux';
import { useEffect, useState, useRef, Fragment } from 'react';
import { removeNotification } from './actions';

function Notification(props) {
    console.log(props);
    const notif = props.notifications;
    const testTime = props.duration;
    const [visible, setVisible] = useState(false);
    const [notifications, setNotifications] = useState([]);
    const [notificationsComponent, setNotificationsComponent] = useState([]);

    useEffect(() => {
        document.documentElement.style.setProperty('--notification-animation-duration', `${testTime}s`);
    }, []);

    useEffect(() => {
        setNotifications(props.notifications);
        setNotificationsComponent(props.notifications);
        setVisible(props.notifications.length ? true : false);
        autoClose();
    }, [props.notifications]);

    const renders = useRef(0);
    console.log('Notification times was rendered: ', renders.current++);

    function autoClose() {
        let interval = setTimeout(() => {
            // props.removeNotification(0);
        }, testTime * 1000);

        return () => clearTimeout(interval);
    }

    function btnHandlerClose(index) {
        props.removeNotification(index);
    }

    return (
        <Fragment>
            <ul className={`notification ${visible ? 'visible' : 'hidden'}`}>
                {notificationsComponent &&
                    notificationsComponent.map((notification, index) => {
                        console.log(notification, index);
                        return (
                            <li key={index}>
                                <style>{`
                                    .notification .bar {
                                        animation-name: barAnimation;
                                    }
                                `}</style>
                                <p>
                                    {notification.msg} {index}
                                </p>

                                <button onClick={() => btnHandlerClose(index)}>Close</button>

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

function mapDispatchToProps(dispatch) {
    return {
        removeNotification: (data) => dispatch(removeNotification(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
