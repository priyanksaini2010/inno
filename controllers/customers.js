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
    }
    
}