const mongoose = require('mongoose');

const heritageSiteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  location: String,
  images: [String],
  tags: [String],
}, { timestamps: true });

module.exports = mongoose.model('HeritageSite', heritageSiteSchema);
