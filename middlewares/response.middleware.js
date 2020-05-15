const { createError } = require('../services/errorService');

const responseMiddleware = (req, res, next) => {
    if (res.err) {
        res.status(404).send(createError(res.err.message));
    } else {
        res.status(200).send(res.data);
    }
    next();
}

exports.responseMiddleware = responseMiddleware;