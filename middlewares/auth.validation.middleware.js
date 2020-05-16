const {AuthValidationService} = require('../services/authValidationService');

const authValid = (req, res, next) => {
    let existField = AuthValidationService.validateExistFields(req.body);
    let emptyFields = AuthValidationService.validateEmptyFields(req.body);
    if (existField !== true) {
        res.err = Error(`No field "${existField}"`);
        res.err.status = 400;
    } else if (emptyFields !== true) {
        res.err = Error(`Empty field ${emptyFields}`);
        res.err.status = 400;
    }

    next();
}

exports.authValid = authValid;