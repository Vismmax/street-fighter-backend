const {fight} = require('../models/fight');
const {BaseValidationService} = require('../services/baseValidationService');

class FightValidationService extends BaseValidationService {
    constructor() {
        super(fight);
    }

    validateLog(log) {
        try {
            let parseLog = JSON.parse(log);
            return Array.isArray(parseLog);
        } catch {
            return false;
        }
    }

    validateAddLog(log) {
        try {
            return JSON.parse(log);
        } catch {
            return false;
        }
    }
}

exports.FightValidationService = new FightValidationService();