const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
  title: String,
  images: [{ type: String }], // URLs or paths
  place: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Place'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Gallery', gallerySchema);
