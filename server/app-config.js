module.exports = {
    variable: {
        port: '4000',
        dbName: 'alpha-test',
        cookieName: 'auth-token',
    },
    constant: {
        cookieParserSecret: 'secret',
        accessControlAllowOrigin: 'http://localhost:3000',
        jwtSecret: 'shhhhh',
        saltRounds: '10',
    }
};
// authCookieName: 'auth_cookie',