const {user} = require('../models/user');
const {BaseValidationService} = require('../services/baseValidationService');

class UserValidationService extends BaseValidationService {
    constructor() {
        super(user);
    }

    validateEmail(email) {
        let re = /^\w+([\.-]?\w+)*@gmail.com/;
        return re.test(email);
    }

    validatePhoneNumber(phoneNumber) {
        let re = /\+380\d{9}/;
        return re.test(phoneNumber);
    }

    validatePassword(password) {
        let re = /.{3}/;
        return re.test(password);
    }
}

exports.UserValidationService = new UserValidationService();