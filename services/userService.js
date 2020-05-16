const {UserRepository} = require('../repositories/userRepository');
const {UserValidationService} = require('../services/validationUserService');

class UserService {

    search(search) {
        const item = UserRepository.getOne(search);
        if (!item) {
            return null;
        }
        return item;
    }

    getUsers() {
        try {
            let users = UserRepository.getAll();
            if (!users) {
                throw Error('Users not found');
            }
            return users;
        } catch (error) {
            throw Error('Users not found');
        }
    }

    getUser(userData) {
        try {
            let user = UserRepository.getOne(userData);
            if (!user) {
                throw Error('User not found');
            }
            return user;
        } catch (error) {
            throw Error('User not found');
        }
    }

    create(userData) {
        const data = UserValidationService.removeExcessFields(userData);
        try {
            let user = UserRepository.create(data);
            if (!user) {
                throw Error('User not saved');
            }
            return user;
        } catch (error) {
            throw Error('User not saved');
        }
    }

    update(id, userData) {
        const data = UserValidationService.removeExcessFields(userData);
        try {
            let user = UserRepository.update(id, data);
            if (!user) {
                throw Error('User not updated');
            }
            return user;
        } catch (error) {
            throw Error('User not updated');
        }
    }

    delete(id) {
        try {
            let user = UserRepository.delete(id);
            if (!user.length) {
                throw Error('User not deleted');
            }
            return user;
        } catch (error) {
            throw Error('User not deleted');
        }
    }
}

module.exports = new UserService();