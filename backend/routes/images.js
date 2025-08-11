const express = require('express');
const { getImages, getImageById } = require('../controllers/imageController');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   GET /api/images
// @desc    Get random images
// @access  Private (requires authentication)
router.get('/', auth, getImages);

// @route   GET /api/images/:id
// @desc    Get specific image by ID
// @access  Private (requires authentication)
router.get('/:id', auth, getImageById);

// Test route for images
router.get('/test/public', (req, res) => {
  res.json({
    message: 'Image routes are working!',
    success: true,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
