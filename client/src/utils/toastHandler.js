import { toast } from 'react-toastify';
import { css } from 'glamor';

toast.configure({
    autoClose: 6000,
    draggable: false,
    position: toast.POSITION.TOP_RIGHT,
});

const customToast = {
    success(msg, options = {}) {
        return toast.success(msg, {
            className: {
                borderRadius: '10px',
            },
            ...options,
        });
    },
};

function toastSuccess(res) {
    // toast(res.message ? res.message : res, {
    //     type: toast.TYPE.SUCCESS,
    // });

    console.log('here');
    // customToast.success('+++++++++++++++++');
    toast(res.message ? res.message : res, {
        className: css({
            background: 'black',
        }),
        bodyClassName: css({
            fontSize: '60px',
        }),
        progressClassName: css({
            background: 'repeating-radial-gradient(circle at center, red 0, blue, green 30px)',
        }),
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
