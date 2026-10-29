const express = require('express');
const controller = require('../controllers/libroMayor.controller');

const router = express.Router();

router.get('/', controller.list);

module.exports = router;
