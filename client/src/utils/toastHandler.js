import { toast } from 'react-toastify';
import { css } from 'glamor';

toast.configure({
    autoClose: 6000,
    draggable: false,
    position: toast.POSITION.TOP_RIGHT,
});

function notificationSuccess(res) {
    console.log('here');
}

const notificationType = {
    success: 'success',
    info: {},
    error: {},
};

function toastSuccess(res) {
    toast(res.message ? res.message : res, {
        type: toast.TYPE.SUCCESS,
    });
}

function toastInfo(res) {
    toast(res.message ? res.message : res, {
        type: toast.TYPE.INFO,
    });
}

function toastError(err) {
    toast(err.message ? err.message : err, {
        type: toast.TYPE.ERROR,
    });
}

export { notificationType, notificationSuccess, toastSuccess, toastInfo, toastError };
