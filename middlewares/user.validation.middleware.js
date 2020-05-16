const { user } = require('../models/user');

const { validateExistFields } = require('../services/validationService');
const { validateEmptyFields } = require('../services/validationService');
const { validateId } = require('../services/validationService');
const { validateEmail } = require('../services/validationService');
const { validatePhoneNumber } = require('../services/validationService');
const { validatePassword } = require('../services/validationService');
const { validateExistUser } = require('../services/validationService');

const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation
    
    let existField = validateExistFields(req.body);
    let emptyFields = validateEmptyFields(req.body);
    if (!validateId(req.body)) {
        res.err = Error(`User entity to create isn't valid. Exist field "id"`);
        res.err.status = 400;
    } else if (existField !== true) {
        res.err = Error(`User entity to create isn't valid. No field "${existField}"`);
        res.err.status = 400;
    } else if (emptyFields !== true) {
        res.err = Error(`User entity to create isn't valid. Empty field ${emptyFields}`);
        res.err.status = 400;
    } else if (!validateEmail(req.body.email)) {
        res.err = Error(`User entity to create isn't valid. Incorrect email`);
        res.err.status = 400;
    } else if (!validatePhoneNumber(req.body.phoneNumber)) {
        res.err = Error(`User entity to create isn't valid. Incorrect phone number`);
        res.err.status = 400;
    } else if (!validatePassword(req.body.password)) {
        res.err = Error(`User entity to create isn't valid. Incorrect password`);
        res.err.status = 400;
    } else if (!validateExistUser(req.body)) {
        res.err = Error(`User entity to create isn't valid. User exist`);
        res.err.status = 400;
    }

    next();
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    next();
}

function validationUser(user) {
    let existField = validateExistFields(user);
    let emptyFields = validateEmptyFields(user);
    if (!validateId(user)) {
        return Error(`User entity to create isn't valid. Exist field "id"`);
    } else if (existField !== true) {
        return Error(`User entity to create isn't valid. No field "${existField}"`);
    } else if (emptyFields !== true) {
        return Error(`User entity to create isn't valid. Empty field ${emptyFields}`);
    } else if (!validateEmail(user.email)) {
        return Error(`User entity to create isn't valid. Incorrect email`);
    } else if (!validatePhoneNumber(user.phoneNumber)) {
        return Error(`User entity to create isn't valid. Incorrect phone number`);
    } else if (!validatePassword(user.password)) {
        return Error(`User entity to create isn't valid. Incorrect password`);
    }
    return false;
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;