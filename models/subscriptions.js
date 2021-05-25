const mongoose = require('mongoose');
const validateToken = require('../utils').validateToken;

const Schema = mongoose.Schema;

const SubscriptionsSchema = new Schema({
    customer_id: {
        type: 'String',
        required: true,
        trim: true
    },
    product_id: {
        type: 'String',
        required: true,
        trim: true
    },
    customer_info: {
        type: 'String',
        required: true,
        trim: true
    },
    product_info: {
        type: 'String',
        required: true,
        trim: true
    },
    created_date: {
        type: 'String',
        required: true,
        trim: true
    }
});

SubscriptionsSchema.pre('save', function(next) {
    next();
});
module.exports = mongoose.model('Subscriptions', SubscriptionsSchema);