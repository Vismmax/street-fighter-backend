const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

router.post('/', createUserValid, (req, res, next) => {
    try {
        if (!res.err) {
            let data = UserService.create(req.body);
            res.data = data;
        }
    } catch (err) {
        res.err = err;
        res.err.status = 400;
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;