// src/service/authService.js
const UserService = require('../application/userService');

class AuthService {
  async signUp(username, password) {
    return UserService.signUp(username, password);
  }

  async login(username, password) {
    return UserService.login(username, password);
  }
}

module.exports = new AuthService();
