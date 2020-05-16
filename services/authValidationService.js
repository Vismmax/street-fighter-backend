const {auth} = require('../models/auth');
const {BaseValidationService} = require('../services/baseValidationService');

class AuthValidationService extends BaseValidationService {
    constructor() {
        super(auth);
    }
}

exports.AuthValidationService = new AuthValidationService();