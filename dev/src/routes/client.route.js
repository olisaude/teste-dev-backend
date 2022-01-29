const express = require('express');
const { userCreate } = require('../controllers/client.controller');

const router = express.Router();

router.post('/', userCreate);

module.exports = router;