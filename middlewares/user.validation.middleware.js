const { user } = require('../models/user');

const { validateExistFields } = require('../services/validationService');
const { validateEmptyFields } = require('../services/validationService');
const { validateId } = require('../services/validationService');
const { validateEmail } = require('../services/validationService');
const { validatePhoneNumber } = require('../services/validationService');
const { validatePassword } = require('../services/validationService');

const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    
    let existField = validateExistFields(req.body);
    let emptyFields = validateEmptyFields(req.body);
    if (!validateId(req.body)) {
        res.status(400).send(createError(`User entity to create isn't valid. Exist field "id"`));
    } else if (existField !== true) {
        console.log(existField)
        res.status(400).send(createError(`User entity to create isn't valid. No field "${existField}"`));
    } else if (emptyFields !== true) {
        console.log(existField);
        res.status(400).send(createError(`User entity to create isn't valid. Empty field ${emptyFields}`));
    } else if (!validateEmail(req.body.email)) {
        console.log('email');
        res.status(400).send(createError(`User entity to create isn't valid. Incorrect email`));
    } else if (!validatePhoneNumber(req.body.phoneNumber)) {
        console.log('phone');
        res.status(400).send(createError(`User entity to create isn't valid. Incorrect phone number`));
    } else if (!validatePassword(req.body.password)) {
        console.log('pass');
        res.status(400).send(createError(`User entity to create isn't valid. Incorrect password`));
    } else {
        next();
    }

    // next();
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