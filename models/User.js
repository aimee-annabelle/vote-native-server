const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  names: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  nid: {
    type: String,
    required: true,
  },
  created_on: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('User', UserSchema);
