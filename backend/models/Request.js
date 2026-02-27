const mongoose = require('mongoose');
const RequestSchema = new mongoose.Schema({
  hospitalName: { type: String, required: true },
  bloodTypeNeeded: { type: String, required: true },
  units: { type: Number, default: 1 },
  urgency: { type: String, enum: ['Low','Medium','High'], default: 'Low' },
  city: { type: String },
  contact: { type: String },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Request', RequestSchema);
