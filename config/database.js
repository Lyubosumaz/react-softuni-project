const mongoose = require('mongoose');
const constants = require('./constants');
const { seed } = require('../utils');

module.exports = () => {
    mongoose.connect(constants.dbURL, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true
    }).then(() => {
        console.log('***Database is connected successfully! Everything is ready!***');
    }).catch(err => {
        console.log('Something went terribly wrong');
        console.error(err.message);
    });
    
    const db = mongoose.connection;
    db.once('open', err => {
        if (err) throw err;
        // seed.seedAdminUser()
        seed.seedGameItems();
    });
    db.on('error', reason => {
        console.log(reason);
    });
    return Promise.resolve(db);
};
