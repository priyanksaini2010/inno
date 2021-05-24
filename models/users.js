const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const environment = process.env.NODE_ENV;
const stage = require('../config')[environment];
const validateToken = require('../utils').validateToken;

// schema maps to a collection
const Schema = mongoose.Schema;

const userSchema = new Schema({

    username: {
        type: 'String',
        required: true,
        trim: true,
        unique: true
    },
    first_name: {
        type: 'String',
        required: true,
        trim: true,
    },
    last_name: {
        type: 'String',
        required: true,
        trim: true,
    },
    password: {
        type: 'String',
        required: true,
        trim: true
    },
    email: {
        type: 'String',
        required: true,
        trim: true
    },
    ip_v4: {
        type: 'String',
        required: true,
        trim: true
    },
    failed_logins: {
        type: 'Number',
        required: false,
        trim: true,
        default: 0
    },
    meta: {
        serial_number: {
            type: 'Number',
            required: true,
            trim: true,
        }
    },
    status: {
        type: 'Number',
        required: true,
        trim: true,
        default: 0
    },
    created_date: {
        type: 'String',
        required: true,
        trim: true
    },
});

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified || !user.isNew) {
        next();
    } else {
        bcrypt.hash(user.password, stage.saltingRounds, function(err, hash) {
            if (err) {
                console.log('Error hashing password for user', user.name);
                next(err);
            } else {
                user.password = hash;
                next();
            }
        });
    }
});
module.exports = mongoose.model('User', userSchema);