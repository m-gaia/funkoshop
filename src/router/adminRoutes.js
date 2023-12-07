const express = require('express');
const router = express.Router();

const controllers = require('../controllers/adminControllers');

router.get('/', controllers.adminView);
router.get('/create', controllers.createView);
router.post('/create', controllers.createItem);
router.get('/edit/:id', controllers.editView);
router.put('/edit/:id', controllers.editItem);
router.delete('/delete/:id', controllers.deleteItem);

module.exports = router;