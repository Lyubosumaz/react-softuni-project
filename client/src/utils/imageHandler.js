function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function imageRatio(a, b, c) {
    return ((b / c / (a / c)) * 100).toFixed(2);
}

function imageOrientation(a, b) {
    return b > a ? 'portrait' : 'landscape';
}

function imageAltName(a) {
    return a.split(' ').length !== 1 ? a.replace(/\s+/g, '-').toLowerCase() : a;
}

function imageLoad(url, crossOrigin) {
    const img = new Image();

    if (crossOrigin) {
        img.crossOrigin = crossOrigin;
    }

    return new Promise((resolve, reject) => {
        const loaded = (event) => {
            unbindEvents(img);
            resolve(event.target);
        };

        const errored = (error) => {
            unbindEvents(img);
            reject(error);
        };

        img.onload = loaded;
        img.onerror = errored;
        img.onabort = errored;

        img.src = url;
    });

    function unbindEvents(img) {
        img.onload = null;
        img.onerror = null;
        img.onabort = null;
    }
}

async function getImage(url) {
    try {
        return await imageLoad(url, false);
    } catch (err) {
        console.warn(err);
    }
}

export { gcd, imageRatio, imageOrientation, imageAltName, getImage };
