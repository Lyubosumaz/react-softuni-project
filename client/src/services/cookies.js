function parseAllCookies() {
    return document.cookie.split('; ').reduce((acc, cookie) => {
        const [cookieName, cookieValue] = cookie.split('=');
        acc[cookieName] = cookieValue;
        return acc;
    }, {});
}

function removeAllCookies() {
    document.cookie.split(';').forEach(function (c) {
        document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
}

function authCookie() {
    const cookie = parseAllCookies();
    return cookie['auth_token'];
}

export { parseAllCookies, removeAllCookies, authCookie };
