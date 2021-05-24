const mongoose = require('mongoose');
const validateToken = require('../utils').validateToken;

const Schema = mongoose.Schema;

const profilesSchema = new Schema({
    profile_title: {
        type: 'String',
        required: true,
        trim: true
    },
    payment_card_number: {
        type: 'Number',
        required: true,
        trim: true
    },
    payment_mm: {
        type: 'Number',
        required: true,
        trim: true
    },
    payment_yy: {
        type: 'Number',
        required: true,
        trim: true
    },
    payment_card_cvv: {
        type: 'Number',
        required: true,
        trim: true
    },
    delivery_first_name: {
        type: 'String',
        required: true,
        trim: true
    },
    delivery_last_name: {
        type: 'String',
        required: true,
        trim: true
    },
    delivery_street_address: {
        type: 'String',
        required: true,
        trim: true
    },
    delivery_zip_code: {
        type: 'String',
        required: true,
        trim: true
    },
    delivery_country: {
        type: 'String',
        required: true,
        trim: true
    },
    delivery_city: {
        type: 'String',
        required: true,
        trim: true
    },
    delivery_state: {
        type: 'String',
        required: true,
        trim: true
    },
    billing_switch: {
        type: 'Boolean',
        required: true,
        trim: true
    },
    billing_first_name: {
        type: 'String',
        required: false,
        trim: true
    },
    billing_last_name: {
        type: 'String',
        required: false,
        trim: true
    },
    billing_street_address: {
        type: 'String',
        required: false,
        trim: true
    },
    billing_zip_code: {
        type: 'String',
        required: false,
        trim: true
    },
    billing_country: {
        type: 'String',
        required: false,
        trim: true
    },
    billing_city: {
        type: 'String',
        required: false,
        trim: true
    },
    billing_state: {
        type: 'String',
        required: false,
        trim: true
    },
});

profilesSchema.pre('save', function(next) {
    next();
});
module.exports = mongoose.model('Profile', profilesSchema);