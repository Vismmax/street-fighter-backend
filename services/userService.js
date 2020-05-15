const { UserRepository } = require('../repositories/userRepository');
const { removeExcessFields } = require('../services/validationService');

class UserService {

    // TODO: Implement methods to work with user

    search(search) {
        const item = UserRepository.getOne(search);
        if(!item) {
            return null;
        }
        return item;
    }

    create(user) {
        const data = removeExcessFields(user);
        try {
            return UserRepository.create(data);
        }
        catch (error) {
            console.error(error);
            return false;
        }
    }
}

module.exports = new UserService();