const {Router} = require('express');
const FightService = require('../services/fightService');
const {createFightValid, updateFightValid, addLogValid} = require('../middlewares/fight.validation.middleware');
const {responseMiddleware} = require('../middlewares/response.middleware');


const router = Router();

router.get('/', (req, res, next) => {
    try {
        res.data = FightService.getFights();
    } catch (err) {
        res.err = err;
        res.err.status = 404;
    } finally {
        next();
    }
}, responseMiddleware);

router.get('/fight/:id', (req, res, next) => {
    try {
        res.data = FightService.getFight({id: req.params.id});
    } catch (err) {
        res.err = err;
        res.err.status = 404;
    } finally {
        next();
    }
}, responseMiddleware);

router.get('/history', (req, res, next) => {
    try {
        res.data = FightService.getHistory(req.query);
    } catch (err) {
        res.err = err;
        res.err.status = 404;
    } finally {
        next();
    }
}, responseMiddleware);

router.post('/history', (req, res, next) => {
    try {
        res.data = FightService.getHistory(req.body);
    } catch (err) {
        res.err = err;
        res.err.status = 404;
    } finally {
        next();
    }
}, responseMiddleware);

router.post('/fight', createFightValid, (req, res, next) => {
    try {
        if (!res.err) {
            res.data = FightService.create(req.body);
        }
    } catch (err) {
        res.err = err;
        res.err.status = 400;
    } finally {
        next();
    }
}, responseMiddleware);

router.post('/fight/:id', addLogValid, (req, res, next) => {
    try {
        if (!res.err) {
            res.data = FightService.addLog(req.params.id, req.body);
        }
    } catch (err) {
        res.err = err;
        res.err.status = 400;
    } finally {
        next();
    }
}, responseMiddleware);

router.put('/fight/:id', updateFightValid, (req, res, next) => {
    try {
        if (!res.err) {
            res.data = FightService.update(req.params.id, req.body);
        }
    } catch (err) {
        res.err = err;
        res.err.status = 400;
    } finally {
        next();
    }
}, responseMiddleware);

router.delete('/fight/:id', (req, res, next) => {
    try {
        res.data = FightService.delete(req.params.id);
    } catch (err) {
        res.err = err;
        res.err.status = 400;
    } finally {
        next();
    }
}, responseMiddleware);

module.exports = router;