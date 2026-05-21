const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  countryCode: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Submission', submissionSchema);
