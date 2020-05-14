const { user } = require('../models/user');

const validateId = (body) => {
    return !('id' in body);
}

exports.validateId = validateId;