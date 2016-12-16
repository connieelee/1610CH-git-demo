const express = require('express');
const router = express.Router();

router.use('/users', require('./users'));
router.use('/repos', require('./repos'));

module.exports = router;
