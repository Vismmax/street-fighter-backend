class BaseValidationService {
    constructor(model) {
        this.model = model;
    }

    validateId(body) {
        return !('id' in body);
    }

    validateExistFields(body) {
        for (let key in this.model) {
            if (!(key in body) && key !== 'id') return key;
        }
        return true;
    }

    validateEmptyFields(body) {
        for (let key in body) {
            if (!body[key]) return key;
        }
        return true;
    }

    validateExcessFields(body) {
        for (let key in body) {
            if (!key in this.model) return key;
        }
        return true;
    }

    removeExcessFields = (body) => {
        let validUser = {};
        for (let key in body) {
            if ((key in this.model) && key !== 'id') {
                validUser[key] = body[key];
            }
        }
        return validUser;
    }
}

exports.BaseValidationService = BaseValidationService;