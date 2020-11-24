import { toast } from 'react-toastify';

toast.configure({
    autoClose: 6000,
    draggable: false,
    position: toast.POSITION.BOTTOM_CENTER,
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

export { toastSuccess, toastInfo, toastError };
