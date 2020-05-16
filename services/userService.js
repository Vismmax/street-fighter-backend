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

    getUsers() {
        try {
            let users = UserRepository.getAll();
            if (!userss) {
                throw Error('Users not found');
            }
            return users;
        } catch (error) {
            throw Error('Users not found');
        }
    }

    create(userData) {
        const data = removeExcessFields(userData);
        try {
            let user = UserRepository.create(data);
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

module.exports = new UserService();