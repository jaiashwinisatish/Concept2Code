const mongoose = require('mongoose');
const DonorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  bloodType: { type: String, required: true },
  phone: { type: String },
  email: { type: String },
  city: { type: String },
  lastDonationDate: { type: Date },
  available: { type: Boolean, default: true },
  rewardPoints: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Donor', DonorSchema);
