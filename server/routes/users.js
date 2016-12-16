const express = require('express');
const router = express.Router();

const User = require('../db/models/user');

router.get('/', (req, res, next) => {
  User.findAll()
    .then(users => { res.send(users); })
    .catch(next);
});

router.get('/:id', (req, res, next) => {
  User.findOne({ where: { id: req.params.id } })
    .then(user => {
      if (!user) {
        const userNotFoundErr = new Error('User not found');
        userNotFoundErr.status = 404;
        throw userNotFoundErr;
      } else {
        res.send(user);
      }
    })
    .catch(next);
});

/** 
DO THIS:
  - POST a new user
  - DELETE a user
  - GET all repos belonging to a user (e.g. '/:id/repos')
**/

module.exports = router;
