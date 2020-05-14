const { user } = require('../models/user');

const validateId = (body) => {
    return !('id' in body);
}

const removeExcessFields = (body) => {
    let validUser = {};
    for (let key in body) {
        if ((key in user) && key !== 'id') {
            validUser[key] = body[key];
        }
    }
    return validUser;
}

exports.validateId = validateId;
exports.removeExcessFields = removeExcessFields;