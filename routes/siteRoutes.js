const express = require('express');
const router = express.Router();
const {
  getAllSites,
  createSite,
  getSiteById,
  updateSite,
  deleteSite
} = require('../controllers/siteController');

router.get('/', getAllSites);
router.post('/', createSite);
router.get('/:id', getSiteById);      
router.put('/:id', updateSite);        
router.delete('/:id', deleteSite);     

module.exports = router;
