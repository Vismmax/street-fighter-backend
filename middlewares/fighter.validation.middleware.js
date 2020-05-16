const {fighter} = require('../models/fighter');
const {FighterValidationService} = require('../services/fighterValidationService');
const FighterService = require('../services/fighterService');

const createFighterValid = (req, res, next) => {
    let err = validationFighter(req.body, 'create');
    if (err) {
        res.err = err;
        res.err.status = 400;
    } else if (FighterService.search({name: req.body.name})) {
        res.err = Error(`Fighter entity to create isn't valid. Fighter exist`);
        res.err.status = 400;
    }

    next();
}

const updateFighterValid = (req, res, next) => {
    let err = validationFighter(req.body, 'update');
    if (err) {
        res.err = err;
        res.err.status = 400;
    } else if (!FighterService.search({id: req.params.id})) {
        res.err = Error(`Fighter entity to update isn't valid. Fighter not exist`);
        res.err.status = 400;
    }

    next();
}

function validationFighter(fighter, action) {
    let existField = FighterValidationService.validateExistFields(fighter);
    let emptyFields = FighterValidationService.validateEmptyFields(fighter);
    let excessFields = FighterValidationService.validateExcessFields(fighter);
    if (!FighterValidationService.validateId(fighter)) {
        return Error(`Fighter entity to ${action} isn't valid. Exist field "id"`);
    } else if (existField !== true && action === 'create') {
        return Error(`Fighter entity to ${action} isn't valid. No field "${existField}"`);
    } else if (emptyFields !== true && action === 'create') {
        return Error(`Fighter entity to ${action} isn't valid. Empty field ${emptyFields}`);
    } else if (excessFields !== true) {
        return Error(`Fighter entity to ${action} isn't valid. Excess field ${excessFields}`);
    } else if (fighter.power && !FighterValidationService.validatePower(fighter.power)) {
        return Error(`Fighter entity to ${action} isn't valid. Incorrect power`);
    } else if (fighter.defense && !FighterValidationService.validateDefense(fighter.defense)) {
        return Error(`Fighter entity to ${action} isn't valid. Incorrect defense`);
    }
    return false;
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;