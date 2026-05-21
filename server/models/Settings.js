const mongoose = require('mongoose');

const settingsSchema = new mongoose.Schema({
  zoomLink: { type: String, default: '' },
  webinarDate: { type: String, default: '' },
  webinarTime: { type: String, default: '' },
}, { timestamps: true });

module.exports = mongoose.model('Settings', settingsSchema);
