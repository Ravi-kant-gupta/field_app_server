const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  timeOfSignIn: { type: Date, default: Date.now },
  lastActiveTime: { type: Date, default: Date.now },
  fcmToken: { type: String, default: '' },
  token: { type: String, default: '' },
  provider: { type: String, required: true, default: '' },
  uid: { type: String, required: true, unique: true }
});

module.exports = mongoose.model('User', UserSchema);
