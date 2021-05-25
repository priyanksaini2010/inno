const mongoose = require('mongoose');
const Products = require('../models/products');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connUri = process.env.MONGO_LOCAL_CONN_URL;

module.exports = {
    getProducts(req, res) {
        console.log("products API calling");
        console.log(req.params);
        let result = {};
        let status = 200;
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            if (!err) {
                Products.find({ "_id": req.params.id }, (err, products) => {
                    if (!err) {
                        result.status = status;
                        result.result = products;
                    } else {
                        status = 500;
                        result.status = status;
                        result.error = err;
                    }
                    res.status(status).send(result);
                })
            } else {
                status = 500;
                result.status = status;
                result.error = err;
                res.status(status).send(result);
            }

        })
    }
    
}