const express = require('express');
const router = express.Router();

const Repo = require('../db/models/repo');

router.get('/', (req, res, next) => {
  Repo.findAll()
    .then(repos => { res.send(repos); })
    .catch(next);
});

/**
DO THIS:
  - POST a repo and associate it with a user
  - DELETE a repo
**/

module.exports = router;
