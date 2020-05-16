const {FightValidationService} = require('../services/fightValidationService');
const FightersService = require('../services/fightService');

const createFightValid = (req, res, next) => {
    let err = validationFight(req.body, 'create');
    if (err) {
        res.err = err;
        res.err.status = 400;
    }

    next();
}

const updateFightValid = (req, res, next) => {
    let err = validationFight(req.body, 'update');
    if (err) {
        res.err = err;
        res.err.status = 400;
    } else if (!FightersService.search({id: req.params.id})) {
        res.err = Error(`Fight entity to update isn't valid. Fight not exist`);
        res.err.status = 400;
    }

    next();
}

const addLogValid = (req, res, next) => {
    if (!FightValidationService.validateAddLog(req.body.log)) {
        res.err = Error(`Fight entity to update isn't valid. Incorrect "log"`);
        res.err.status = 400;
    }

    next();
}

function validationFight(fight, action) {
    let existField = FightValidationService.validateExistFields(fight);
    let emptyFields = FightValidationService.validateEmptyFields(fight);
    if (!FightValidationService.validateId(fight)) {
        return Error(`Fight entity to ${action} isn't valid. Exist field "id"`);
    } else if (existField !== true) {
        return Error(`Fight entity to ${action} isn't valid. No field "${existField}"`);
    } else if (emptyFields !== true) {
        return Error(`Fight entity to ${action} isn't valid. Empty field ${emptyFields}`);
    } else if (!FightValidationService.validateLog(fight.log)) {
        return Error(`Fight entity to ${action} isn't valid. Incorrect "log"`);
    }
    return false;
}

exports.createFightValid = createFightValid;
exports.updateFightValid = updateFightValid;
exports.addLogValid = addLogValid;