const { Router } = require('express');
const { createUser } = require('../controllers/users.controllers');

const router = Router();

router.post('/', createUser);

module.exports = router;
