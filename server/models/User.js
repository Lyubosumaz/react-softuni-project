const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { saltRounds } = require('../app-config');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'You should write something for Username'],
        unique: [true, 'This Username is already taken. Try something else.'],
        minlength: [4, 'Username should be at least 4 characters long!']
    },
    email: {
        type: String,
        required: [true, 'You should enter your Email'],
        unique: [true, 'There is already account using this Email.'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid Email address']
    },
    password: {
        type: String,
        required: [true, 'You should write something for Password'],
        minlength: [5, 'Password should be at least 5 characters long!']
    },
    subscribe: {
        type: Boolean,
        required: true,
        default: false
    },
    created: {
        type: Date,
        required: true,
        default: () => Date.now() + 2 * 60 * 60 * 1000
    },
    totalGames: {
        type: Number,
        required: true,
        default: 0
    },
    totalTime: {
        type: Number,
        required: true,
        default: 0
    },
});

userSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }
};

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(parseInt(saltRounds), (err, salt) => {
            if (err) {
                next(err);
                return;
            }
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) {
                    next(err);
                    return;
                }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = mongoose.model('User', userSchema);