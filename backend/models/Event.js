const mongoose = require('mongoose');
const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  location: { type: String },
  date: { type: Date },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model('Event', EventSchema);
