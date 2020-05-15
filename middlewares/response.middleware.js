const { createError } = require('../services/errorService');

const responseMiddleware = (req, res, next) => {
    if (res.err) {
        let statusErr = res.err.status || 400;
        res.status(statusErr).send(createError(res.err.message));
    } else {
        res.status(200).send(res.data);
    }
    next();
}

exports.responseMiddleware = responseMiddleware;