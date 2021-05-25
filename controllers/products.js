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
    },

    add(req, res) {
        let result = {};
        let status = 200;

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1;
        var yyyy = today.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        req.body.created_date = dd + '-' + mm + '-' + yyyy;
        console.log("ADD product API calling");
        console.log(req.body);
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            if (!err) {
                const product = new Products(req.body);
                product.save((err, product) => {
                    if (!err) {
                        result.status = status; 
                        result.result = product;
                    } else {
                        status = 500;
                        result.status = status;
                        result.error = err;
                    }
                    res.status(status).send(result);
                });
            } else {
                status = 500;
                result.status = status;
                result.error = err;
                res.status(status).send(result);
            }
        })
    },

    delete(req, res) {
        let result = {};
        let status = 200;
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            if (!err) {
                Products.findByIdAndDelete(req.params.id, (err, deleted) => {
                    if (!err) {
                        result.status = status;
                        result.result = deleted;
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
    },

    getAll(req, res) {
        let result = {};
        let status = 200;
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            if (!err) {
                Products.find({}, (err, products) => {
                    if (!err) {
                        result.status = status;
                        result.result = products;
                        res.status(status).send(result);
                    } else {
                        status = 500;
                        result.status = status;
                        result.error = err;
                        res.status(status).send(result);
                    }
                });
            } else {
                status = 500;
                result.status = status;
                result.error = err;
                res.status(status).send(result);
            }

        });
    }
    
}