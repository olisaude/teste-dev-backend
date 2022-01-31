const express = require('express');
const {
  clientCreate,
  getClientByIdController, getClientByNameAndBirthDateController,
  getClients,
  clientUpdate,
  tenHighScores,
} = require('../controllers/client.controller');

const router = express.Router();

router.post('/', clientCreate);
router.get('/all', getClients);
router.get('/ten', tenHighScores);
router.get('/:id', getClientByIdController);
router.get('/', getClientByNameAndBirthDateController);
router.put('/', clientUpdate);

module.exports = router;
