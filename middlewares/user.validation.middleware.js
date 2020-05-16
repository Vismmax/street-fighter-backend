const {user} = require('../models/user');

const {validateExistFields} = require('../services/validationService');
const {validateEmptyFields} = require('../services/validationService');
const {validateId} = require('../services/validationService');
const {validateEmail} = require('../services/validationService');
const {validatePhoneNumber} = require('../services/validationService');
const {validatePassword} = require('../services/validationService');
const {validateExistUser} = require('../services/validationService');

const createUserValid = (req, res, next) => {
    let err = validationUser(req.body);
    if (err) {
        res.err = err;
        res.err.status = 400;
    } else if (UserService.search({email: req.body.email})) {
        res.err = Error(`User entity to create isn't valid. User exist`);
        res.err.status = 400;
    }

    next();
}

const updateUserValid = (req, res, next) => {
    let err = validationUser(req.body);
    if (err) {
        res.err = err;
        res.err.status = 400;
    } else if (!UserService.search({id: req.params.id})) {
        res.err = Error(`User entity to create isn't valid. User not exist`);
        res.err.status = 400;
    }

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