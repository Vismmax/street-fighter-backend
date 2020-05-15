const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

router.post('/', createUserValid, (req, res, next) => {
    try {
        let data = UserService.create(req.body);
        res.data = data;
    } catch (err) {
        res.err = err;
        res.statusErr = 400;
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;