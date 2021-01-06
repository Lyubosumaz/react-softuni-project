import { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { removeAllNotification } from './actions';
import { factoryButtons } from '../../utils/factory';
import { buttonClass } from '../../utils/class-names.json';

// TODO need to rework this component

function Notification({ duration, notifications, removeAllNotificationProps }) {
    // used classes
    // const componentClass = 'notifications-list scroll-notification';
    const componentClass = 'notifications-list';
    const additionalClass = 'scroll-notification';
    const hiddenClass = 'hidden';
    // TODO EXPAND COMPONENT OPTIONS
    const applyScroll = 2;
    const testTime = duration;
    const notificationsProps = notifications;
    const [notificationsArr, setNotificationsArr] = useState([]);
    const notificationList = useRef();
    let notificationsRef = useRef([]);

    useEffect(() => {
        document.documentElement.style.setProperty('--notification-animation-duration', `${testTime}s`);
        notificationList.current.className = `${notificationList.current.className} ${hiddenClass}`;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (notificationsProps.length) {
            setNotificationsArr(notificationsProps);
            notificationList.current.className = componentClass;
            // TODO commented for fixing styles
            autoClose();
            addAdditionalClass();
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [notificationsProps]);

    function autoClose() {
        let interval = setTimeout(() => {
            let bool = true;

            const findNull = notificationsRef.current.indexOf(null);
            if (findNull !== -1) {
                notificationsRef.current = notificationsRef.current.slice(0, findNull);
            }

            notificationsRef.current.forEach((el) => {
                const classesArr = el.className.split(' ');

                if (classesArr[classesArr.length - 1] !== hiddenClass && bool) {
                    el.className = `${el.className} ${hiddenClass}`;
                    bool = false;
                }
            });

            if (handleRefs()) {
                const currentNotificationClassArr = notificationList.current.className.split(' ');
                notificationList.current.className = currentNotificationClassArr[currentNotificationClassArr.length - 1] === hiddenClass ? notificationList.current.className : `${notificationList.current.className} ${hiddenClass}`;
                removeAllNotificationProps();
                setNotificationsArr([]);
            }

            removeAdditionalClass();
        }, testTime * 1000);

        return () => clearTimeout(interval);
    }

    function addAdditionalClass() {
        if (numberOfNonHiddenNotifications() >= applyScroll) {
            if (!notificationList.current.className.includes(additionalClass)) {
                notificationList.current.className = `${notificationList.current.className} ${additionalClass}`;
            }
        }
    }

    function removeAdditionalClass() {
        if (numberOfNonHiddenNotifications() >= applyScroll) {
            if (notificationList.current.className.includes(additionalClass)) {
                const additionalClassIndex = notificationsRef.current.indexOf(additionalClass);
                console.log(addAdditionalClass);

                if (additionalClassIndex !== -1) {
                    notificationsRef.current = notificationsRef.current.slice(0, additionalClassIndex);
                }

                console.log(notificationsRef);
            }
        }
    }

    function numberOfNonHiddenNotifications() {
        let count = 0;

        const allDOMNotifications = notificationList.current.children;
        for (const element of allDOMNotifications) {
            if (!element.className.includes(hiddenClass)) count++;
        }

        return count;
    }

    function btnHandlerClose(id) {
        notificationsRef.current.forEach((el) => {
            if (el.className.split(' ')[0] === id) {
                el.className = `${el.className} ${hiddenClass}`;
            }
        });
    }

    function handleRefs() {
        let deleteRef = true;

        notificationsRef.current.forEach((el) => {
            const classesArr = el.className.split(' ');

            if (classesArr[classesArr.length - 1] !== hiddenClass) {
                deleteRef = false;
            }
        });

        return deleteRef;
    }

    return (
        <ul ref={notificationList} className={componentClass}>
            {notificationsArr &&
                notificationsArr.map((notification, index) => {
                    return (
                        <li ref={(el) => (notificationsRef.current[index] = el)} key={`${notification._id}__${index}`} className={`${notification._id} notification notification-${notification.options.class}`}>
                            <p>{notification.msg}</p>

                            {factoryButtons({ buttonStyles: buttonClass.Notification })(null, 'Close', null, () => btnHandlerClose(notification._id))}

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
        removeAllNotificationProps: () => dispatch(removeAllNotification()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Notification);

Notification.propTypes = {
    duration: PropTypes.number.isRequired,
    notifications: PropTypes.arrayOf(
        PropTypes.exact({
            _id: PropTypes.string.isRequired,
            msg: PropTypes.string.isRequired,
            options: PropTypes.exact({
                class: PropTypes.string.isRequired,
            }),
        }).isRequired
    ),
    removeAllNotificationProps: PropTypes.func.isRequired,
};
