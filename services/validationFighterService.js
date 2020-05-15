const { fighter } = require('../models/fighter');
const { FighterService } = require('../services/fighterService');

const validateId = (body) => {
    return !('id' in body);
}

const removeExcessFields = (body) => {
    let validUser = {};
    for (let key in body) {
        if ((key in fighter) && key !== 'id') {
            validUser[key] = body[key];
        }
    }
    return validUser;
}

const validateExistFields = (body) => {
    for (let key in fighter) {
        if (!(key in body) && key !== 'id') return key;
    }
    return true;
}

const validateEmptyFields = (body) => {
    for (let key in body) {
        if (!body[key]) return key;
    }
    return true;
}

const validatePower = (power) => {
    let pw = parseInt(power);
    return !(pw < 1 && pw > 100);
}

const validateDefense = (defense) => {
    let def = parseInt(defense);
    return !(def < 0 && def > 100);
}

const validateExistFighter = (body) => {
    if (body.name) {
        try {
            let data = FighterService.search(body);
            if (data) {
                return false;
            }
        } catch (err) {
            return true;
        }
    }
    return true;
}

exports.validateId = validateId;
exports.removeExcessFields = removeExcessFields;
exports.validateExistFields = validateExistFields;
exports.validateEmptyFields = validateEmptyFields;
exports.validatePower = validatePower;
exports.validateDefense = validateDefense;
exports.validateExistFighter = validateExistFighter;