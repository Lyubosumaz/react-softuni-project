const protocol = 'http://';
const domain = 'localhost:4000';

const User = {
    register: (userData) => httpPost("/api/user/register", userData),
    login: (userData) => httpPost("/api/user/login", userData),
    logout: () => httpPost("/api/user/logout"),
    refresh: () => httpPost("/api/user/refresh"),
};

const Social = {
    getAll: () => httpGet('/api/social'),
    get: (memeData) => httpPost('/api/social', memeData),
    addMeme: (memeData) => httpPost('/api/social/add-meme', memeData),
};

const Game = {
    save: (gameData) => httpPost('/api/game/save', gameData),
};


const httpGet = (path) => {
    return requester("GET", path);
};

// const httpDelete = (path) => {
//     return requester("DELETE", path);
// };

const httpPost = (path, options) => {
    return requester("POST", path, options);
};

// const httpPut = (path, options) => {
//     return requester("PUT", path, options);
// };


const requester = (method, path, options) => {
    const data = { method, credentials: 'include' };

    data.headers = {
        "Accept": '*/*',
        "Content-Type": "application/json"
    };

    if (method === "POST" || method === "PUT") {
        data.body = JSON.stringify({ ...options });
    }

    const combinedUrl = `${protocol}${domain}${path}`;
    return fetch(combinedUrl, data)
        .then(res => res.text().then(text => res.status === 200 ? Promise.resolve(JSON.parse(text)) : Promise.reject(text)));
};

export default {
    User,
    Social,
    Game,
};