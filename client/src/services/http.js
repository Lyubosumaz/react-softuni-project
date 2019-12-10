const protocol = 'http://';
const domain = 'localhost:4000';

const User = {
    register: (userData) => httpPost("/api/user/register", userData),
    login: (userData) => httpPost("/api/user/login", userData),
    logout: () => httpPost("/api/user/logout"),
    refresh: () => httpPost("/api/user/refresh"),
    profile: () => httpGet('/api/user/profile'),
    house: () => httpGet('/api/user/house-of-fame'),
};

const Social = {
    getScroll: (memeData) => httpPost('/api/social', memeData),
    getMeme: (id) => httpGet(`/api/social/view-meme/${id}`),
    addMeme: (memeData) => httpPost('/api/social/add-meme', memeData),
    editMeme: (memeData) => httpPut(`/api/social/edit-meme/${memeData.id}`, memeData),
    deleteMeme: (id) => httpDelete(`/api/social/delete-meme/${id}`),
};

const Game = {
    shop: () => httpGet('/api/game/shop'),
    save: (gameData) => httpPost('/api/game/save', gameData),
};

const httpGet = (path) => {
    return requester("GET", path);
};

const httpPost = (path, options) => {
    return requester("POST", path, options);
};

const httpPut = (path, options) => {
    return requester("PUT", path, options);
};

const httpDelete = (path) => {
    return requester("DELETE", path);
};

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