const Gallery = require('../models/Gallery');

// GET all galleries
const getAllGalleries = async (req, res) => {
  try {
    const galleries = await Gallery.find().populate('place');
    res.json(galleries);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST new gallery
const createGallery = async (req, res) => {
  try {
    const gallery = new Gallery(req.body);
    const saved = await gallery.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// GET single gallery
const getGalleryById = async (req, res) => {
  try {
    const gallery = await Gallery.findById(req.params.id).populate('place');
    if (!gallery) return res.status(404).json({ message: 'Gallery not found' });
    res.json(gallery);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT update gallery
const updateGallery = async (req, res) => {
  try {
    const updated = await Gallery.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updated) return res.status(404).json({ message: 'Gallery not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE gallery
const deleteGallery = async (req, res) => {
  try {
    const deleted = await Gallery.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Gallery not found' });
    res.json({ message: 'Gallery deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllGalleries,
  createGallery,
  getGalleryById,
  updateGallery,
  deleteGallery,
};
