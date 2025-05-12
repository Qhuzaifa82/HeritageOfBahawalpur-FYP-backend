
const HeritageSite = require('../models/HeritageSite');

const getAllSites = async (req, res) => {
  try {
    const sites = await HeritageSite.find();
    res.json(sites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST /api/sites
const createSite = async (req, res) => {
  try {
    const newSite = new HeritageSite({
      name: req.body.name,
      description: req.body.description,
      location: req.body.location,
      // Add other necessary fields as per your schema
    });

    const savedSite = await newSite.save();
    res.status(201).json(savedSite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};


// GET /api/sites/:id
const getSiteById = async (req, res) => {
  try {
    const site = await HeritageSite.findById(req.params.id);
    if (!site) return res.status(404).json({ message: 'Site not found' });
    res.json(site);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// PUT /api/sites/:id
const updateSite = async (req, res) => {
  try {
    const updatedSite = await HeritageSite.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedSite) return res.status(404).json({ message: 'Site not found' });
    res.json(updatedSite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE /api/sites/:id
const deleteSite = async (req, res) => {
  try {
    const deletedSite = await HeritageSite.findByIdAndDelete(req.params.id);
    if (!deletedSite) return res.status(404).json({ message: 'Site not found' });
    res.json({ message: 'Site deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllSites,   
  createSite,
  getSiteById,
  updateSite,
  deleteSite
};

