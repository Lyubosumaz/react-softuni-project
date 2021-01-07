import { PropTypes } from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';
import { removeAllNotification } from './actions';

// TODO need to rework this component

function Notification({ duration, notifications, removeAllNotificationProps }) {
    const notificationComponent = useRef();
    const notificationsRedux = notifications;
    const [notificationsArr, setNotificationsArr] = useState([]);
    let notificationsRef = useRef([]);
    // used classes
    // const componentClass = 'notifications-list scroll-notification';
    const componentClass = 'notifications-list';
    const additionalClass = 'scroll-notification';
    const hiddenClass = 'hidden';
    // TODO EXPAND COMPONENT OPTIONS
    const scrollBreakPoint = 2;
    const testTime = duration;

    useEffect(() => {
        document.documentElement.style.setProperty('--notification-animation-duration', `${testTime}s`);
        notificationComponent.current.className = `${notificationComponent.current.className} ${hiddenClass}`;
    }, []);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    useEffect(() => {
        console.log(notificationsRedux);
        if (notificationsRedux.length) {
            setNotificationsArr(notificationsRedux);
            setComponentClassName('reset');
            setComponentClassName('remove');
            // TODO commented for fixing styles
            // autoClose();
        }
    }, [notificationsRedux]);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    function setComponentClassName(key) {
        const validate = scrollValidation();
        switch (key) {
            case 'reset':
                notificationComponent.current.className = componentClass;
                if (validate) notificationComponent.current.className = `${notificationComponent.current.className} ${additionalClass}`;
                break;
            case 'add':
                if (validate && !notificationComponent.current.className.includes(additionalClass)) {
                    notificationComponent.current.className = `${notificationComponent.current.className} ${additionalClass}`;
                }
                break;
            case 'remove':
                if (validate && notificationComponent.current.className.includes(additionalClass)) {
                    notificationComponent.current.className = notificationComponent.current.className.replace(additionalClass, '');
                }
                break;
            default:
                break;
        }
    }

    function scrollValidation() {
        let countOfNonHiddenNotifications = 0;

        const allDOMNotifications = notificationComponent.current.children;
        for (const notification of allDOMNotifications) {
            if (!notification.className.includes(hiddenClass)) countOfNonHiddenNotifications++;
        }

        return countOfNonHiddenNotifications >= scrollBreakPoint;
    }

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
                const currentNotificationClassArr = notificationComponent.current.className.split(' ');
                notificationComponent.current.className = currentNotificationClassArr[currentNotificationClassArr.length - 1] === hiddenClass ? notificationComponent.current.className : `${notificationComponent.current.className} ${hiddenClass}`;
                removeAllNotificationProps();
                setNotificationsArr([]);
            }

            // removeAdditionalClass();
        }, testTime * 1000);

        return () => clearTimeout(interval);
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
        <ul ref={notificationComponent} className={componentClass}>
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
