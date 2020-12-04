import { connect } from 'react-redux';
import { useEffect, useState, useRef, Fragment } from 'react';
import { removeNotification, removeAllNotification } from './actions';

function Notification(props) {
    const renders = useRef(0);
    // console.log('Notification times was rendered: ', renders.current++);
    const testTime = props.duration;

    const notifications = props.notifications;
    const [notificationsArr, setNotificationsArr] = useState([]);
    const notificationList = useRef();
    const notificationsRef = useRef([]);

    useEffect(() => {
        renders.current = renders.current + 1;
    });

    useEffect(() => {
        document.documentElement.style.setProperty('--notification-animation-duration', `${testTime}s`);
        notificationList.current.className = notificationList.current.className + ' ' + 'hidden';
    }, []);

    useEffect(() => {
        if (notifications.length) {
            notificationList.current.className = 'notifications-list';
            setNotificationsArr(notifications);
            autoClose();
        }
    }, [notifications]);

    function autoClose() {
        let interval = setTimeout(() => {
            let bool = true;

            console.log(notificationsRef);

            notificationsRef.current.forEach((el) => {
                const classesArr = el.className.split(' ');

                if (classesArr[classesArr.length - 1] !== 'hidden' && bool) {
                    el.className = el.className + ' ' + 'hidden';
                    bool = false;
                }
            });

            // handleRefs();
        }, testTime * 1000);

        return () => clearTimeout(interval);
    }

    function btnHandlerClose(id) {
        console.log(notificationsRef);

        notificationsRef.current.forEach((el) => {
            if (el.className.split(' ')[0] === id) {
                el.className = el.className + ' ' + 'hidden';
            }
        });

        handleRefs();
    }

    function handleRefs() {
        let deleteRef = true;

        notificationsRef.current.forEach((el) => {
            const classesArr = el.className.split(' ');

            if (classesArr[classesArr.length - 1] !== 'hidden') {
                deleteRef = false;
            }
        });

        if (deleteRef) {
            // notificationRef.current = [];
            notificationList.current.className = notificationList.current.className.split(' ')[notificationList.current.className.split(' ').length - 1] === 'hidden' ? notificationList.current.className : notificationList.current.className + ' ' + 'hidden';
            props.removeAllNotification();
            setNotificationsArr([]);
        }
    }

    return (
        <Fragment>
            <div>{renders.current}</div>
            <ul ref={notificationList} className={`notifications-list`}>
                {notificationsArr &&
                    notificationsArr.map((notification, index) => {
                        return (
                            <li ref={(el) => (notificationsRef.current[index] = el)} key={`${notification.id}__${index}`} className={`${notification.id} notification`}>
                                <p>
                                    {notification.msg} {index}
                                </p>

                                <button onClick={() => btnHandlerClose(notification.id)}>Close</button>

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
        removeAllNotification: () => dispatch(removeAllNotification()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);
