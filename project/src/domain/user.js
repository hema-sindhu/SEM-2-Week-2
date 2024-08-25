// src/domain/user.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // other fields as necessary
});

module.exports = mongoose.model('User', userSchema);
