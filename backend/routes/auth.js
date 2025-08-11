const express = require('express');
const { registerUser, loginUser, getUserProfile } = require('../controllers/authController');
const { validateRegister, validateLogin, checkValidation } = require('../middleware/validation');
const auth = require('../middleware/auth');

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register a new user
// @access  Public
router.post('/register', validateRegister, checkValidation, registerUser);

// @route   POST /api/auth/login
// @desc    Login user
// @access  Public
router.post('/login', validateLogin, checkValidation, loginUser);

// @route   GET /api/auth/user
// @desc    Get current user profile
// @access  Private
router.get('/user', auth, getUserProfile);

// Test route for authentication
router.get('/test', (req, res) => {
  res.json({
    message: 'Auth routes are working!',
    success: true,
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
