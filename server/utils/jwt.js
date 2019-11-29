const jwt = require('jsonwebtoken');
const { constant } = require('../app-config')

function createToken(data) {
    return jwt.sign(data, constant.jwtSecret, { expiresIn: '1h' });
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, constant.jwtSecret, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
}

module.exports = {
    createToken,
    verifyToken,
}