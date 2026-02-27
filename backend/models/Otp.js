const mongoose = require('mongoose');
const OtpSchema = new mongoose.Schema({
  phoneOrEmail: { type: String, required: true },
  code: { type: String, required: true },
  expiresAt: { type: Date, required: true },
  used: { type: Boolean, default: false }
});
module.exports = mongoose.model('Otp', OtpSchema);
