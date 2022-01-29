const express = require('express');
const { clientCreate, getClientByIdController, getClientByNameAndBirthDateController } = require('../controllers/client.controller');

const router = express.Router();

router.post('/', clientCreate);
router.get('/:id', getClientByIdController);
router.get('/', getClientByNameAndBirthDateController);

module.exports = router;
