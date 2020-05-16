const {FightRepository} = require('../repositories/fightRepository');
const {FightValidationService} = require('../services/fightValidationService');

class FightersService {
    search(search) {
        const item = FightRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }

    getFights() {
        try {
            let fights = FightRepository.getAll();
            if (!fights) {
                throw Error('Fights not found');
            }
            return fights;
        } catch (error) {
            throw Error('Fights not found');
        }
    }

    getFight(fightData) {
        try {
            let fight = FightRepository.getOne(fightData);
            if (!fight) {
                throw Error('Fight not found');
            }
            return fight;
        } catch (error) {
            throw Error('Fight not found');
        }
    }

    getHistory(fighters) {
        try {
            let fights = FightRepository.getAll();
            let searchFights = fights.filter(fight => (
                (fight.fighter1 === fighters.fighter1 || fight.fighter2 === fighters.fighter1) &&
                (fight.fighter1 === fighters.fighter2 || fight.fighter2 === fighters.fighter2)));
            if (!fights) {
                throw Error('Fights not found');
            }
            return searchFights;
        } catch (error) {
            throw Error('Fights not found');
        }
    }

    create(fightData) {
        const data = FightValidationService.removeExcessFields(fightData);
        try {
            data.log = JSON.parse(data.log);
            let fight = FightRepository.create(data);
            if (!fight) {
                throw Error('Fight not saved');
            }
            return fight;
        } catch (error) {
            throw Error('Fight not saved');
        }
    }

    update(id, fightData) {
        const data = FightValidationService.removeExcessFields(fightData);
        try {
            data.log = JSON.parse(data.log);
            let fight = FightRepository.update(id, data);
            if (!fight) {
                throw Error('Fight not updated');
            }
            return fight;
        } catch (error) {
            throw Error('Fight not updated');
        }
    }

    addLog(id, logData) {
        try {
            let fight = FightRepository.getOne({id: id});
            let log = JSON.parse(logData.log);
            if (Array.isArray(log)) {
                fight.log = fight.log.concat(log);
            } else {
                fight.log.push(log);
            }
            let newFight = FightRepository.update(id, fight);
            if (!newFight) {
                throw Error('Fight not updated');
            }
            return newFight;
        } catch (error) {
            throw Error('Fight not updated');
        }
    }

    delete(id) {
        try {
            let fight = FightRepository.delete(id);
            if (!fight.length) {
                throw Error('Fight not deleted');
            }
            return fight;
        } catch (error) {
            throw Error('Fight not deleted');
        }
    }
}

module.exports = new FightersService();