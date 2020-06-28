/* eslint-disable import/first */
import settings from 'settings.json';

const User = {
    register: (userData) => httpPost('/api/user/register', userData),
    login: (userData) => httpPost('/api/user/login', userData),
    logout: () => httpPost('/api/user/logout'),
    refresh: () => httpPost('/api/user/refresh'),
    profile: () => httpGet('/api/user/profile'),
    house: () => httpGet('/api/user/house-of-fame'),
};

const Social = {
    getScroll: (memeData) => httpPost('/api/social', memeData),
    getMeme: (memeId) => httpGet(`/api/social/view-meme/${memeId}`),
    addMeme: (memeData) => httpPost('/api/social/add-meme', memeData),
    editMeme: (memeData) => httpPut(`/api/social/edit-meme/${memeData.id}`, memeData),
    deleteMeme: (memeId) => httpDelete(`/api/social/delete-meme/${memeId}`),
};

const Game = {
    shop: () => httpGet('/api/game/shop'),
    save: (gameData) => httpPost('/api/game/save', gameData),
    buy: (itemId) => httpGet(`/api/game/buy/${itemId}`),
    inventory: () => httpGet('/api/game/inventory'),
    sell: (itemId) => httpGet(`/api/game/sell/${itemId}`),
    equip: (itemId) => httpGet(`/api/game/equip/${itemId}`),
    character: () => httpGet('/api/game/character'),
    remove: (itemId) => httpGet(`/api/game/remove/${itemId}`),
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

    const combinedURL = `${settings.protocol}${settings.domain}${path}`;
    return fetch(combinedURL, data)
        .then(res => res.text().then(text => res.status === 200 ? Promise.resolve(JSON.parse(text)) : Promise.reject(text)));
};

export default {
    User,
    Social,
    Game,
};
