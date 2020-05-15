const { fighter } = require('../models/fighter');
const FighterService = require('../services/fighterService');

const { validateExistFields } = require('../services/validationFighterService');
const { validateEmptyFields } = require('../services/validationFighterService');
const { validateId } = require('../services/validationFighterService');
const { validatePower } = require('../services/validationFighterService');
const { validateDefense } = require('../services/validationFighterService');

const createFighterValid = (req, res, next) => {
    let err = validationFighter(req.body);
    if (err) {
        res.err = err;
        res.err.status = 400;
    } else if (FighterService.search({name: req.body.name})) {
        res.err = Error(`User entity to create isn't valid. Fighter exist`);
        res.err.status = 400;
    }

    next();
}

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    next();
}

function validationFighter(fighter) {
    let existField = validateExistFields(fighter);
    let emptyFields = validateEmptyFields(fighter);
    if (!validateId(fighter)) {
        return Error(`User entity to create isn't valid. Exist field "id"`);
    } else if (existField !== true) {
        return Error(`User entity to create isn't valid. No field "${existField}"`);
    } else if (emptyFields !== true) {
        return Error(`User entity to create isn't valid. Empty field ${emptyFields}`);
    } else if (!validatePower(fighter.power)) {
        return Error(`User entity to create isn't valid. Incorrect power`);
    } else if (!validateDefense(fighter.defense)) {
        return Error(`User entity to create isn't valid. Incorrect defense`);
    }
    return false;
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;