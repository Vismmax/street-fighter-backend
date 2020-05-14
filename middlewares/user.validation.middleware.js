const { user } = require('../models/user');
const createUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during creation

    next();
}

const updateUserValid = (req, res, next) => {
    // TODO: Implement validatior for user entity during update

    next();
}

function validateEmail(email) {
    let re = /^\w+([\.-]?\w+)*@gmail.com/;
    return re.test(email);
}

function validatePhoneNumber(phoneNumber) {
    let re = /\+380\d{9}/;
    return re.test(phoneNumber);
}

exports.createUserValid = createUserValid;
exports.updateUserValid = updateUserValid;