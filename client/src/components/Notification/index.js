import { PropTypes } from 'prop-types';
import { useCallback, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { removeAllNotification } from '../../services/redux/ducks/notification';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';

// Component Classes
const componentClass = 'notifications-list';
const additionalClass = 'scroll-notification';
const hiddenClass = 'hidden';
const isClickClass = 'isClick';
function Notification({ notifications, removeAllNotificationProps, duration, scrollAt }) {
    const notificationComponent = useRef();
    const notificationsRedux = notifications;
    const [notificationsArr, setNotificationsArr] = useState([]);
    let notificationsRef = useRef([]);

    // TODO EXPAND COMPONENT OPTIONS
    const scrollBreakPoint = scrollAt ? scrollAt : 3;
    const animationDuration = duration ? duration : 5;

    // Initial render: apply component options
    useEffect(() => {
        document.documentElement.style.setProperty('--notification-animation-duration', `${animationDuration}s`);
        notificationComponent.current.className = `${notificationComponent.current.className} ${hiddenClass}`;
    }, [animationDuration]);

    const scrollValidation = useCallback(() => {
        let countOfNonHiddenNotifications = 0;

        const allDOMNotifications = notificationComponent.current.children;
        for (const notification of allDOMNotifications) {
            if (!notification.className.includes(hiddenClass)) countOfNonHiddenNotifications++;
        }

        return countOfNonHiddenNotifications >= scrollBreakPoint;
    }, [scrollBreakPoint]);

    const setComponentClassName = useCallback(
        (data) => {
            switch (data) {
                case 'reset':
                    notificationComponent.current.className = componentClass;
                    break;
                case 'add':
                    if (scrollValidation() && !notificationComponent.current.className.includes(additionalClass)) {
                        notificationComponent.current.className = `${notificationComponent.current.className} ${additionalClass}`;
                    }
                    break;
                case 'remove':
                    if (notificationComponent.current.className.includes(additionalClass)) {
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
        [notificationComponent, scrollValidation]
    );

    function removeNullRefs() {
        if (!notificationsRef.current) return;

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
                if (once && el.className.includes(isClickClass)) {
                    el.className = el.className.replace(isClickClass, hiddenClass);
                    once = false;
                }
                if (once && !el.className.includes(hiddenClass)) {
                    el.className = `${el.className} ${hiddenClass}`;
                    once = false;
                }
            });

            setComponentClassName('remove');

            if (checkIfAllNotificationsAreHidden()) {
                setComponentClassName('reset');
                setComponentClassName('hide');

                setNotificationsArr([]);
                removeAllNotificationProps();
            }
        }, animationDuration * 1000);

        return () => clearTimeout(interval);
    }, [animationDuration, setComponentClassName, removeAllNotificationProps]);

    useEffect(() => {
        if (notificationsRedux.length) {
            setNotificationsArr(notificationsRedux);

            setComponentClassName('reset');
            setComponentClassName('add');

            autoClose();
        }
    }, [notificationsRedux, setComponentClassName, autoClose]);

    function handleNotificationBtnClose(id) {
        removeNullRefs();

        notificationsRef.current.forEach((el) => {
            if (el.className.includes(id)) {
                if (!el.className.includes(isClickClass)) el.className = `${el.className} ${isClickClass}`;
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
                            <div className={`notification-wrapper`}>
                                <div className={`notification-icon-wrapper`}>
                                    <span>Image</span>
                                </div>

                                <section className={`notification-text`}>
                                    <h5>Notification Title</h5>

                                    <p>{notification.msg}</p>
                                </section>

                                <div className={`notification-button-wrapper`}>
                                    {/* notification button */}
                                    {factoryButtons({ buttonStyles: buttonClass.Notification })(null, 'X', null, () => handleNotificationBtnClose(notification._id))}
                                </div>
                            </div>

                            <div className={`notification-bar`}>
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
    duration: PropTypes.number,
    scrollAt: PropTypes.number,
};
