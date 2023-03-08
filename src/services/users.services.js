const Users = require('../models/users.model');

class UsersServices {
  static async create(newUser) {
    try {
      const userCreated = await Users.create(newUser);
      return userCreated;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UsersServices;
