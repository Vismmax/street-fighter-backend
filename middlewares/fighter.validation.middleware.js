const { fighter } = require('../models/fighter');

const { validateExistFields } = require('../services/validationFighterService');
const { validateEmptyFields } = require('../services/validationFighterService');
const { validateId } = require('../services/validationFighterService');
const { validatePower } = require('../services/validationFighterService');
const { validateDefense } = require('../services/validationFighterService');
const { validateExistFighter } = require('../services/validationFighterService');

const createFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during creation

    let existField = validateExistFields(req.body);
    let emptyFields = validateEmptyFields(req.body);
    if (!validateId(req.body)) {
        res.err = Error(`User entity to create isn't valid. Exist field "id"`);
        res.err.status = 400;
    } else if (existField !== true) {
        res.err = Error(`User entity to create isn't valid. No field "${existField}"`);
        res.err.status = 400;
    } else if (emptyFields !== true) {
        res.err = Error(`User entity to create isn't valid. Empty field ${emptyFields}`);
        res.err.status = 400;
    } else if (!validatePower(req.body.power)) {
        res.err = Error(`User entity to create isn't valid. Incorrect power`);
        res.err.status = 400;
    } else if (!validateDefense(req.body.defense)) {
        res.err = Error(`User entity to create isn't valid. Incorrect defense`);
        res.err.status = 400;
    } else if (!validateExistFighter(req.body)) {
        res.err = Error(`User entity to create isn't valid. Fighter exist`);
        res.err.status = 400;
    }

    next();
}

const updateFighterValid = (req, res, next) => {
    // TODO: Implement validatior for fighter entity during update
    next();
}

exports.createFighterValid = createFighterValid;
exports.updateFighterValid = updateFighterValid;