const express = require('express');
const router = express.Router();

const {
  getAllSoaps,
  getSoapById,
  createSoap
} = require('../controllers/soapController');

const validateSoapsInput = require('../middleware/validateSoapsInput');

router.get('/', getAllSoaps);
router.get('/:id', getSoapById);
router.post('/', validateSoapsInput, createSoap);

module.exports = router;