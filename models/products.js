const mongoose = require('mongoose');
const validateToken = require('../utils').validateToken;

const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    product_name: {
        type: 'String',
        required: true,
        trim: true
    },
    product_price: {
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

ProductsSchema.pre('save', function(next) {
    next();
});
module.exports = mongoose.model('Products', ProductsSchema);