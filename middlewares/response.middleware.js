const { createError } = require('../services/errorService');

const responseMiddleware = (req, res, next) => {
    let statusErr = res.statusErr || 400;
    if (res.err) {
        res.status(statusErr).send(createError(res.err.message));
    } else {
        res.status(200).send(res.data);
    }
    next();
}

exports.responseMiddleware = responseMiddleware;