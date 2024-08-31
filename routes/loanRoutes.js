const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');


router.post('/submit', loanController.submitLoanApplication);

module.exports = router;
