const {Router} = require('express');
const FighterService = require('../services/fighterService');
const {responseMiddleware} = require('../middlewares/response.middleware');
const {createFighterValid, updateFighterValid} = require('../middlewares/fighter.validation.middleware');

const router = Router();

router.get('/', (req, res, next) => {
    try {
        res.data = FighterService.getFighters();
    } catch (err) {
        res.err = err;
        res.err.status = 404;
    } finally {
        next();
    }
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
    try {
        res.data = FighterService.getFighter({id: req.params.id});
    } catch (err) {
        res.err = err;
        res.err.status = 404;
    } finally {
        next();
    }
}, responseMiddleware);

router.post('/', createFighterValid, (req, res, next) => {
    try {
        if (!res.err) {
            res.data = FighterService.create(req.body);
        }
    } catch (err) {
        res.err = err;
        res.err.status = 400;
    } finally {
        next();
    }
}, responseMiddleware);

router.put('/:id', updateFighterValid, (req, res, next) => {
    try {
        if (!res.err) {
            res.data = FighterService.update(req.params.id, req.body);
        }
    } catch (err) {
        res.err = err;
        res.err.status = 400;
    } finally {
        next();
    }
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
    try {
        res.data = FighterService.delete(req.params.id);
    } catch (err) {
        res.err = err;
        res.err.status = 400;
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;