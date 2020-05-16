const {user} = require('../models/user');
const UserService = require('../services/userService');

const {validateExistFields} = require('../services/validationUserService');
const {validateEmptyFields} = require('../services/validationUserService');
const {validateId} = require('../services/validationUserService');
const {validateEmail} = require('../services/validationUserService');
const {validatePhoneNumber} = require('../services/validationUserService');
const {validatePassword} = require('../services/validationUserService');

const createUserValid = (req, res, next) => {
    let err = validationUser(req.body, 'create');
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
    let err = validationUser(req.body, 'update');
    if (err) {
        res.err = err;
        res.err.status = 400;
    } else if (!UserService.search({id: req.params.id})) {
        res.err = Error(`User entity to update isn't valid. User not exist`);
        res.err.status = 400;
    }

    next();
}

function validationUser(user, action) {
    let existField = validateExistFields(user);
    let emptyFields = validateEmptyFields(user);
    if (!validateId(user)) {
        return Error(`User entity to ${action} isn't valid. Exist field "id"`);
    } else if (existField !== true) {
        return Error(`User entity to ${action} isn't valid. No field "${existField}"`);
    } else if (emptyFields !== true) {
        return Error(`User entity to ${action} isn't valid. Empty field ${emptyFields}`);
    } else if (!validateEmail(user.email)) {
        return Error(`User entity to ${action} isn't valid. Incorrect email`);
    } else if (!validatePhoneNumber(user.phoneNumber)) {
        return Error(`User entity to ${action} isn't valid. Incorrect phone number`);
    } else if (!validatePassword(user.password)) {
        return Error(`User entity to ${action} isn't valid. Incorrect password`);
    }
    return false;
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;