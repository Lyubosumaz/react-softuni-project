const protocol = 'http://';
const domain = 'localhost:4000';

const User = {
    test: () => httpGet("/api/home"),
    test2: (data) => httpPost("/api/home", data),
    login: (userData) => httpPost("/api/user/login", userData),
    // signup: (userData) => httpPost("/api/user/signup", userData)
};


const httpGet = (path) => {
    return requester("GET", path);
};

const httpDelete = (path) => {
    return requester("DELETE", path);
};

const httpPost = (path, options) => {
    return requester("POST", path, options);
};

const httpPut = (path, options) => {
    return requester("PUT", path, options);
};

const requester = (method, path, options) => {
    const combinedUrl = `${protocol}${domain}${path}`;
    const data = { method };

    data.headers = {
        Accept: "application/json",
        "Content-Type": "application/json"
    };

    if (method === "POST" || method === "PUT") {
        data.body = JSON.stringify({ ...options });
    }
    console.log(combinedUrl, data, method)
    return fetch(combinedUrl, data)
        .then(res => res.json());
};

export default {
    User
};