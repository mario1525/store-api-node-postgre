const jwt = require('jsonwebtoken');
// const bcrypt = require('bcrypt');
const { config } = require('../config/config');

// const UserService = require('./user.servis');
// const service = new UserService();

class AuthServis {
  async singToken(user) {
    const payload = {
      sub: user.id,
      role: user.role,
    };
    const token = await jwt.sign(payload, config.jwtSecret);
    return {
      user,
      token,
    };
  }
}

module.exports = { AuthServis };
