const mongoose = require('mongoose');
const validateToken = require('../utils').validateToken;

const Schema = mongoose.Schema;

const CustomersSchema = new Schema({
    // store: {
    //     type: 'String',
    //     required: true,
    //     trim: true
    // },
    // size: {
    //     type: 'String',
    //     required: true,
    //     trim: true
    // },
    // keywords: {
    //     type: 'String',
    //     required: true,
    //     trim: true
    // },
    // profile: {
    //     type: 'Object',
    //     required: true,
    //     trim: true
    // },
    // proxies: {
    //     type: 'Array',
    //     required: true,
    //     trim: true
    // },
    // account: {
    //     type: 'String',
    //     required: true,
    //     trim: true
    // },
    // start_manual: {
    //     type: 'Boolean',
    //     required: true,
    //     trim: true
    // },
    // start_timestamp: {
    //     type: 'Number',
    //     required: true,
    //     trim: true
    // }
});

CustomersSchema.pre('save', function(next) {
    next();
});
module.exports = mongoose.model('Customers', CustomersSchema);