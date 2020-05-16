const {FighterRepository} = require('../repositories/fighterRepository');
const {FighterValidationService} = require('./fighterValidationService');

class FighterService {

    search(search) {
        const item = FighterRepository.getOne(search);
        if (!item) {
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
        } catch (error) {
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
        } catch (error) {
            throw Error('Fighter not found');
        }
    }

    create(fighterData) {
        const data = FighterValidationService.removeExcessFields(fighterData);
        try {
            let fighter = FighterRepository.create(data);
            if (!fighter) {
                throw Error('Fighter not saved');
            }
            return fighter;
        } catch (error) {
            throw Error('Fighter not saved');
        }
    }

    update(id, fighterData) {
        const data = FighterValidationService.removeExcessFields(fighterData);
        try {
            let fighter = FighterRepository.update(id, data);
            if (!fighter) {
                throw Error('Fighter not updated');
            }
            return fighter;
        } catch (error) {
            throw Error('Fighter not updated');
        }
    }

    delete(id) {
        try {
            let fighter = FighterRepository.delete(id);
            if (!fighter.length) {
                throw Error('Fighter not deleted');
            }
            return fighter;
        } catch (error) {
            throw Error('Fighter not deleted');
        }
    }
}

module.exports = new FighterService();