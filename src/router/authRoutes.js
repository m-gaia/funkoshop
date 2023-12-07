const express = require('express');
const router = express.Router();

const controllers = require('../controllers/authControllers');

router.get('/login', controllers.loginView);
router.post('/login', controllers.loginUser);
router.get('/register', controllers.registerView);
router.post('/register', controllers.registerUser);
router.get('/logout', controllers.logoutView);

module.exports = router;