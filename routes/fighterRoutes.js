const { Router } = require('express');
const FighterService = require('../services/fighterService');
const { responseMiddleware } = require('../middlewares/response.middleware');
const { createFighterValid, updateFighterValid } = require('../middlewares/fighter.validation.middleware');

const router = Router();

// TODO: Implement route controllers for fighter

router.get('/', (req, res, next) => {
    try {
        let data = FighterService.getFighters();
        res.data = data;
    } catch (err) {
        res.err = err;
        res.err.status = 404;
    } finally {
        next();
    }
}, responseMiddleware);

router.get('/:id', (req, res, next) => {
    try {
        let data = FighterService.getFighter({id: req.params.id});
        res.data = data;
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
            let data = FighterService.create(req.body);
            res.data = data;
        }
    } catch (err) {
        res.err = err;
        res.err.status = 400;
    } finally {
        next();
    }
}, responseMiddleware);

router.put('/:id', (req, res, next) => {
    console.log('put');
}, responseMiddleware);

router.delete('/:id', (req, res, next) => {
    console.log('del');
}, responseMiddleware);

module.exports = router;