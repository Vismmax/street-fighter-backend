const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

router.post('/', createUserValid, (req, res, next) => {
    let data = UserService.create(req.body);
    if (data) {
        res.status(200).send(data);
    }
    else {
        res.status(400).send('error');
    }
});

module.exports = router;