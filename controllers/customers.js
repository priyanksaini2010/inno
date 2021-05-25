const mongoose = require('mongoose');
const Customers = require('../models/customers');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connUri = process.env.MONGO_LOCAL_CONN_URL;

module.exports = {
    getCustomers(req, res) {
        console.log("Customers API calling");
        console.log(req.params);
        let result = {};
        let status = 200;
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            if (!err) {
                Customers.find({ "_id": req.params.id }, (err, customers) => {
                    if (!err) {
                        result.status = status;
                        result.result = customers;
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
        console.log("ADD Customer API calling");
        console.log(req.body);
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            if (!err) {
                const customer = new Customers(req.body);
                customer.save((err, customer) => {
                    if (!err) {
                        result.status = status; 
                        result.result = customer;
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
                Customers.findByIdAndDelete(req.params.id, (err, deleted) => {
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
                Customers.find({}, (err, customers) => {
                    if (!err) {
                        result.status = status;
                        result.result = customers;
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