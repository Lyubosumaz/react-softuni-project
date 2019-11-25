const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const { cookieParserSecret } = require('../app-config');

module.exports = (app) => {
    app.use(logger('dev'));
    app.use(express.json());
    app.use(cookieParser(cookieParserSecret));
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(express.static(path.join(__dirname, 'public')));
};