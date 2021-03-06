const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const { cookieParserSecret, accessControlAllowOrigin } = require('../app-config');

module.exports = (app) => {
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(cookieParser(cookieParserSecret));

    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', `${accessControlAllowOrigin}`);
        res.header('Access-Control-Allow-Methods', 'GET, DELETE, POST, PUT, OPTIONS');
        res.header('Access-Control-Request-Headers', '*');
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
        res.header('Access-Control-Allow-Credentials', 'true');
        next();
    });
};
