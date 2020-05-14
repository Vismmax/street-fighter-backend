const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

router.post('/', createUserValid, (req, res, next) => {
    console.log(req.body);
    res.status(200).send(req.body);
});

module.exports = router;