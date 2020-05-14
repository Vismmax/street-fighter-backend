const { user } = require('../models/user');

const { validateExistFields } = require('../services/validationService');
const { validateEmptyFields } = require('../services/validationService');
const { validateId } = require('../services/validationService');
const { validateEmail } = require('../services/validationService');
const { validatePhoneNumber } = require('../services/validationService');
const { validatePassword } = require('../services/validationService');

const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation

    next();
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    next();
}

function createError(message) {
    return {
        error: true,
        message
    }
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;