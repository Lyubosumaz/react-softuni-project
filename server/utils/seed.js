const bcrypt = require('bcrypt');
const User = require('../models/User');
const { constant } = require('../app-config');

seedAdminUser = async function () {
    try {
        let users = await User.find();
        if (users.length > 0) { return };
        // const salt = await bcrypt.genSalt(parseInt(constant.saltRounds));
        // const password = await bcrypt.hash('123', salt);
        return User.create({ username: 'admin', password: '123' });
    } catch (err) { console.log(err); }
}

module.exports = { seedAdminUser };