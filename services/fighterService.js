const { FighterRepository } = require('../repositories/fighterRepository');
const { removeExcessFields } = require('../services/validationFighterService');

class FighterService {
    // TODO: Implement methods to work with fighters

    search(search) {
        const item = FighterRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    getFighters() {
        try {
            let fighters = FighterRepository.getAll();
            if (!fighters) {
                throw Error('Fighters not found');
            }
            return fighters;
        }
        catch (error) {
            throw Error('Fighters not found');
        }
    }

    getFighter(fighterData) {
        try {
            let fighter = FighterRepository.getOne(fighterData);
            if (!fighter) {
                throw Error('Fighter not found');
            }
            return fighter;
        }
        catch (error) {
            throw Error('Fighter not found');
        }
    }

    create(fighterData) {
        const data = removeExcessFields(fighterData);
        try {
            let fighter = FighterRepository.create(data);
            if (!fighter) {
                throw Error('Fighter not saved');
            }
            return fighter;
        }
        catch (error) {
            throw Error('Fighter not saved');
        }
    }
}

module.exports = new FighterService();