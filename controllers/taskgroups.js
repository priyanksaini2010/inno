const mongoose = require('mongoose');
const TaskGroups = require('../models/taskgroups');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connUri = process.env.MONGO_LOCAL_CONN_URL;

module.exports = {
    add(req, res) {
        let result = {};
        let status = 200;
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            if (!err) {
                const group = new TaskGroups(req.body);
                group.save((err, group) => {
                    if (!err) {
                        result.status = status; 
                        result.result = group;
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
    get(req, res) {
        let result = {};
        let status = 200;
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            if (!err) {
                TaskGroups.find({}, (err, group) => {
                    if (!err) {
                        result.status = status;
                        result.result = group;
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

        });
    },
    update(req, res) {
        let result = {};
        let status = 200;
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            if (!err) {
                TaskGroups.findByIdAndUpdate(req.params.group, req.body, (err, group) => {
                    if (!err) {
                        result.status = status;
                        result.result = group;
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
                TaskGroups.findByIdAndDelete(req.params.group, (err, deleted) => {
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
    getOne(req, res){
        let result = {};
        let status = 200;
        mongoose.connect(connUri, { useNewUrlParser: true }, (err) => {
            if (!err) {
                TaskGroups.findById(req.params.group, (err, task) => {
                    if (!err) {
                        result.status = status;
                        result.result = task;
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