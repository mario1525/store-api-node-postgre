const { boom } = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class serviceUsers {
  constructor() {}
  //ok
  async create(data) {
    const newUser = await models.User.create(data);
    return {
      newUser,
    };
  }
  //ok
  async find() {
    const data = await models.User.findAll();
    return {
      data,
    };
  }
  //ok
  async findone(id) {
    const user = await models.User.findByPk(id);
    if (user == null) {
      boom.notFound('user not found ');
    }
    return {
      user,
    };
  }
  //ok
  async update(id, changes) {
    const user = await models.User.findByPk(id);
    if (!user) {
      boom.notFound('user not found ');
    }
    const rta = await user.update(changes);
    return {
      rta,
    };
  }

  async delete(id) {
    const user = await models.User.findByPk(id);
    if (!user) {
      boom.notFound('user not found ');
    }
    await user.destroy();
    return {
      user,
    };
  }
}

module.exports = serviceUsers;
