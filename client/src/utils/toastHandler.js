import { toast } from 'react-toastify';

const notificationType = {
    success: { class: 'success' },
    info: { class: 'info' },
    error: { class: 'error' },
};

toast.configure({
    autoClose: 6000,
    draggable: false,
    position: toast.POSITION.TOP_RIGHT,
});

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

export { notificationType, toastSuccess, toastInfo, toastError };
