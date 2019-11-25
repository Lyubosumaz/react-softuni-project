const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { saltRounds } = require('../app-config');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'You should write something for Username'],
        unique: [true, 'This Username is already taken. Try something else.'],
        validate: [
            {
                validator: (v) => {
                    return /[a-zA-Z0-9]+/.test(v);
                },
                message: props => `${props.value} is not a valid Username! Use Alphanumeric.`
            }
        ],
        minlength: [3, 'Username should be at least 3 characters long!']
    },
    password: {
        type: String,
        required: [true, 'You should write something for Password'],
        validate: [
            {
                validator: (v) => {
                    return /[a-zA-Z0-9]+/.test(v);
                },
                message: props => `${props.value} is not a valid Password! Use Alphanumeric.`
            }
        ],
        minlength: [2, 'Password should be at least 2 characters long!']
    }
});

userSchema.methods = {
    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }
}

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
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

module.exports = mongoose.model('User', userSchema);;