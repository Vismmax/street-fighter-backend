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

const validateExistFields = (body) => {
    for (let key in user) {
        if (!(key in body) && key !== 'id') return key;
    }
    return true;
}

const validateEmptyFields = (body) => {
    for (let key in body) {
        if (!body[key]) return key;
    }
    return true;
}

const validateEmail = (email) => {
    let re = /^\w+([\.-]?\w+)*@gmail.com/;
    return re.test(email);
}

const validatePhoneNumber = (phoneNumber) => {
    let re = /\+380\d{9}/;
    return re.test(phoneNumber);
}

exports.validateId = validateId;
exports.removeExcessFields = removeExcessFields;
exports.validateExistFields = validateExistFields;
exports.validateEmptyFields = validateEmptyFields;
exports.validateEmail = validateEmail;
exports.validatePhoneNumber = validatePhoneNumber;