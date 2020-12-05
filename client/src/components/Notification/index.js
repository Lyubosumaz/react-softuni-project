import { connect } from 'react-redux';
import { useEffect, useState, useRef, Fragment } from 'react';
import { removeAllNotification } from './actions';

function Notification(props) {
    const testTime = props.duration;
    const notifications = props.notifications;
    const [notificationsArr, setNotificationsArr] = useState([]);
    const notificationList = useRef();
    let notificationsRef = useRef([]);

    useEffect(() => {
        document.documentElement.style.setProperty('--notification-animation-duration', `${testTime}s`);
        notificationList.current.className = notificationList.current.className + ' ' + 'hidden';
    }, []);

    useEffect(() => {
        if (notifications.length) {
            setNotificationsArr(notifications);
            notificationList.current.className = 'notifications-list';
            autoClose();
        }
    }, [notifications]);

    function autoClose() {
        let interval = setTimeout(() => {
            let bool = true;

            const findNull = notificationsRef.current.indexOf(null);
            if (findNull != -1) {
                notificationsRef.current = notificationsRef.current.slice(0, findNull);
            }

            notificationsRef.current.forEach((el) => {
                const classesArr = el.className.split(' ');

                if (classesArr[classesArr.length - 1] !== 'hidden' && bool) {
                    el.className = el.className + ' ' + 'hidden';
                    bool = false;
                }
            });

            if (handleRefs()) {
                notificationList.current.className = notificationList.current.className.split(' ')[notificationList.current.className.split(' ').length - 1] === 'hidden' ? notificationList.current.className : notificationList.current.className + ' ' + 'hidden';
                props.removeAllNotification();
                setNotificationsArr([]);
            }
        }, testTime * 1000);

        return () => clearTimeout(interval);
    }

    function btnHandlerClose(id) {
        notificationsRef.current.forEach((el) => {
            if (el.className.split(' ')[0] === id) {
                el.className = el.className + ' ' + 'hidden';
            }
        });
    }

    function handleRefs() {
        let deleteRef = true;

        notificationsRef.current.forEach((el) => {
            const classesArr = el.className.split(' ');

            if (classesArr[classesArr.length - 1] !== 'hidden') {
                deleteRef = false;
            }
        });

        return deleteRef;
    }

    return (
        <ul ref={notificationList} className={`notifications-list`}>
            {notificationsArr &&
                notificationsArr.map((notification, index) => {
                    console.log(notification);
                    return (
                        <li ref={(el) => (notificationsRef.current[index] = el)} key={`${notification.id}__${index}`} className={`${notification.id} notification notification-${notification.options.class}`}>
                            <p>{notification.msg}</p>

                            <button onClick={() => btnHandlerClose(notification.id)}>Close</button>

                            <div className="progress-bar">
                                <span className="bar"></span>
                            </div>
                        </li>
                    );
                })}
        </ul>
    );
}

function mapStateToProps(state) {
    return {
        notifications: state.notification.notifications,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeAllNotification: () => dispatch(removeAllNotification()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);