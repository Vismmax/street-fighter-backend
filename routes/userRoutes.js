const { Router } = require('express');
const UserService = require('../services/userService');
const { createUserValid, updateUserValid } = require('../middlewares/user.validation.middleware');
const { responseMiddleware } = require('../middlewares/response.middleware');

const router = Router();

// TODO: Implement route controllers for user

router.get('/', (req, res, next) => {
    try {
        res.data = UserService.getUsers();
    } catch (err) {
        res.err = err;
        res.err.status = 404;
    } finally {
        next();
    }
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
    try {
        res.data = UserService.getUser({id: req.params.id});
    } catch (err) {
        res.err = err;
        res.err.status = 404;
    } finally {
        next();
    }
}, responseMiddleware);

router.post('/', createUserValid, (req, res, next) => {
    try {
        if (!res.err) {
            res.data = UserService.create(req.body);
        }
    } catch (err) {
        res.err = err;
        res.err.status = 400;
    } finally {
        next();
    }
}, responseMiddleware);

router.put('/:id', updateUserValid, (req, res, next) => {
    try {
        if (!res.err) {
            res.data = UserService.update(req.params.id, req.body);
        }
    } catch (err) {
        res.err = err;
        res.err.status = 400;
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;