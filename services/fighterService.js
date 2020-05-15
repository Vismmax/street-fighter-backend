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

    create(fighterData) {
        const data = removeExcessFields(fighterData);
        try {
            let user = FighterRepository.create(data);
            if (!user) {
                throw Error('User not saved');
            }
            return user;
        }
        catch (error) {
            throw Error('User not saved');
        }
    }
}

module.exports = new FighterService();