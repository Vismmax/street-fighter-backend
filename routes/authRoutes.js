const { Router } = require('express');
const AuthService = require('../services/authService');
const {authValid} = require('../middlewares/auth.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

router.post('/login', authValid, (req, res, next) => {
    try {
        res.data = AuthService.login(req.body);
    } catch (err) {
        res.err = err;
        res.err.status = 404;
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;