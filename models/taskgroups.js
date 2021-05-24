const mongoose = require('mongoose');
const root = process.env.IMAG_PATH
const Schema = mongoose.Schema;

const TaskGroupsSchema = new Schema({
  group_name: {
    type: 'String',
    required: true,
    trim: true
  },
  featured_image: {
    type: "String",
    required: true,
    trim: true,
    get: v => `${root}${v}`
  }
});

TaskGroupsSchema.pre('save', function(next) {
    next();
});
module.exports = mongoose.model('TaskGroups', TaskGroupsSchema);