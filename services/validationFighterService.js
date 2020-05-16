const {fighter} = require('../models/fighter');
const {BaseValidationService} = require('../services/baseValidationService');

class FighterValidationService extends BaseValidationService {
    constructor() {
        super(fighter);
    }

    validatePower(power) {
        let pw = parseInt(power);
        return !(pw < 1 || pw > 100);
    }

    validateDefense(defense) {
        let def = parseInt(defense);
        return !(def < 0 || def > 100);
    }
}

exports.FighterValidationService = new FighterValidationService();