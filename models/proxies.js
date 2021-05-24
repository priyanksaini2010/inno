const mongoose = require('mongoose');
const validateToken = require('../utils').validateToken;

const Schema = mongoose.Schema;

const proxiesSchema = new Schema({
  ip: {
    type: 'String',
    required: true,
    trim: true
  },
  port: {
    type: 'Number',
    required: true,
    trim: true
  },
  username: {
    type: 'String',
    required: true,
    trim: true
  },
  password: {
    type: 'String',
    required: true,
    trim: true
  },
});

proxiesSchema.pre('save', function(next) {
    next();
});
module.exports = mongoose.model('Proxy', proxiesSchema);