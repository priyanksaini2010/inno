const mongoose = require('mongoose');
const Subscriptions = require('../models/subscriptions');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connUri = process.env.MONGO_LOCAL_CONN_URL;

module.exports = {
    getSubscriptions(req, res) {
        console.log("subscriptions API calling");
        let result = {};
        let status = 200;
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            if (!err) {
                Subscriptions.find({ "_id": req.params.id }, (err, subscriptions) => {
                    if (!err) {
                        result.status = status;
                        result.result = subscriptions;
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

    delete(req, res) {
        let result = {};
        let status = 200;
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            if (!err) {
                Subscriptions.findByIdAndDelete(req.params.id, (err, deleted) => {
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
                Subscriptions.find({}, (err, subscriptions) => {
                    if (!err) {
                        result.status = status;
                        result.result = subscriptions;
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
        console.log("ADD Subscriptions API calling");
        console.log(req.body);
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            if (!err) {
                const subscription = new Subscriptions(req.body);
                subscription.save((err, subscription) => {
                    if (!err) {
                        result.status = status; 
                        result.result = subscription;
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
    }
    
}