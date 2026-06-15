const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  countryCode: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Submission', submissionSchema);
