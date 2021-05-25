const mongoose = require('mongoose');
const validateToken = require('../utils').validateToken;

const Schema = mongoose.Schema;

const CustomersSchema = new Schema({
    name: {
        type: 'String',
        required: true,
        trim: true
    },
    id: {
        type: 'String',
        required: true,
        trim: true
    },
    invoice: {
        type: 'String',
        required: true,
        trim: true
    },
    description: {
        type: 'String',
        required: true,
        trim: true
    },
    created_date: {
        type: 'String',
        required: true,
        trim: true
    },
});

CustomersSchema.pre('save', function(next) {
    next();
});
module.exports = mongoose.model('Customers', CustomersSchema);