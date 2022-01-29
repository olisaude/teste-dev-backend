const express = require('express');
const {
  clientCreate, getClientByIdController, getClientByNameAndBirthDateController,
  clientUpdate,
} = require('../controllers/client.controller');

const router = express.Router();

router.post('/', clientCreate);
router.get('/:id', getClientByIdController);
router.get('/', getClientByNameAndBirthDateController);
router.put('/', clientUpdate);

module.exports = router;
