import { PropTypes } from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';
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
    // Component Classes
    const componentClass = 'notifications-list';
    const additionalClass = 'scroll-notification';
    const hiddenClass = 'hidden';
    // TODO EXPAND COMPONENT OPTIONS
    const scrollBreakPoint = 2;
    const testTime = duration;

    // Initial render: apply component options
    useEffect(() => {
        document.documentElement.style.setProperty('--notification-animation-duration', `${testTime}s`);
        notificationComponent.current.className = `${notificationComponent.current.className} ${hiddenClass}`;
    }, [testTime]);

    function scrollValidation() {
        let countOfNonHiddenNotifications = 0;

        const allDOMNotifications = notificationComponent.current.children;
        for (const notification of allDOMNotifications) {
            if (!notification.className.includes(hiddenClass)) countOfNonHiddenNotifications++;
        }

        return countOfNonHiddenNotifications >= scrollBreakPoint;
    }

    const setComponentClassName = useCallback(
        (data) => {
            switch (data) {
                case 'reset':
                    notificationComponent.current.className = componentClass;
                    if (scrollValidation()) notificationComponent.current.className = `${notificationComponent.current.className} ${additionalClass}`;
                    break;
                case 'add':
                    if (scrollValidation() && !notificationComponent.current.className.includes(additionalClass)) {
                        notificationComponent.current.className = `${notificationComponent.current.className} ${additionalClass}`;
                    }
                    break;
                case 'remove':
                    if (scrollValidation() && notificationComponent.current.className.includes(additionalClass)) {
                        notificationComponent.current.className = notificationComponent.current.className.replace(additionalClass, '');
                    }
                    break;
                case 'hide':
                    if (!notificationComponent.current.className.includes(hiddenClass)) {
                        notificationComponent.current.className = `${notificationComponent.current.className} ${hiddenClass}`;
                    }
                    break;
                case 'show':
                    if (notificationComponent.current.className.includes(hiddenClass)) {
                        notificationComponent.current.className = notificationComponent.current.className.replace(hiddenClass, '');
                    }
                    break;
                default:
                    break;
            }
        },
        [notificationComponent]
    );

    function removeNullRefs() {
        const findNull = notificationsRef.current.indexOf(null);
        if (findNull !== -1) {
            notificationsRef.current = notificationsRef.current.slice(0, findNull);
        }
    }

    function checkIfAllNotificationsAreHidden() {
        let deleteRef = true;

        notificationsRef.current.forEach((el) => {
            const classesArr = el.className.split(' ');

            if (classesArr[classesArr.length - 1] !== hiddenClass) {
                deleteRef = false;
            }
        });

        return deleteRef;
    }

    const autoClose = useCallback(() => {
        let interval = setTimeout(() => {
            removeNullRefs();

            let once = true;
            notificationsRef.current.forEach((el) => {
                if (once && !el.className.includes(hiddenClass)) {
                    el.className = `${el.className} ${hiddenClass}`;
                    once = false;
                }
            });

            console.log(checkIfAllNotificationsAreHidden());
            if (checkIfAllNotificationsAreHidden()) {
                setComponentClassName('remove');
                // const currentNotificationClassArr = notificationComponent.current.className.split(' ');

                // notificationComponent.current.className =
                // currentNotificationClassArr[currentNotificationClassArr.length - 1] === hiddenClass
                // ?
                // notificationComponent.current.className
                // :
                // `${notificationComponent.current.className} ${hiddenClass}`;

                //     removeAllNotificationProps();
                //     setNotificationsArr([]);
            }
        }, testTime * 1000);

        return () => clearTimeout(interval);
    }, [testTime, setComponentClassName]);

    useEffect(() => {
        if (notificationsRedux.length) {
            setNotificationsArr(notificationsRedux);
            setComponentClassName('reset');
            autoClose();
        }
    }, [notificationsRedux, setComponentClassName, autoClose]);

    function handleNotificationBtnClose(id) {
        notificationsRef.current.forEach((el) => {
            if (el.className.split(' ')[0] === id) {
                el.className = `${el.className} ${hiddenClass}`;
            }
        });

        setComponentClassName('remove');
    }

    return (
        <ul ref={notificationComponent} className={componentClass}>
            {notificationsArr &&
                notificationsArr.map((notification, index) => {
                    return (
                        <li ref={(el) => (notificationsRef.current[index] = el)} key={`${notification._id}__${index}`} className={`${notification._id} notification notification-${notification.options.class}`}>
                            <p>{notification.msg}</p>

                            {factoryButtons({ buttonStyles: buttonClass.Notification })(null, 'Close', null, () => handleNotificationBtnClose(notification._id))}

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
