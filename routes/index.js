var express = require('express');
var router = express.Router();

const {index, detalle, about} = require('../controllers/indexController');

/* '/' */
router.get('/', index);
router.get('/detalle/:name?', detalle);
router.get('/about', about);

module.exports = router;
