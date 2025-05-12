const express = require('express');
const router = express.Router();
const {
  getAllGalleries,
  createGallery,
  getGalleryById,
  updateGallery,
  deleteGallery,
} = require('../controllers/galleryController');

router.get('/', getAllGalleries);
router.post('/', createGallery);
router.get('/:id', getGalleryById);
router.put('/:id', updateGallery);
router.delete('/:id', deleteGallery);

module.exports = router;
