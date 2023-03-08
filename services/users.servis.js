const { boom } = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class serviceUsers {

  constructor() {
      }

  async create(data) {
    const newUser = new models.User.create(data);
    return newUser;
  }

  async find() {
    const [data] = await models.User.findAll();
    return {
      data
    };
  }

  async findone(id) {
    const user = await models.User.findByPk(id);
    if (!user){
      boom.notFound('user not found ');
     }
    return user;
  }

  async update(id, changes) {
    const user = await this.findone(id);
    const rta = await user.update(changes);
    return rta;
  }

  async delete(id) {
    const user = await models.User.findByPk(id);
    await user.destroy();
    return {id};
  }
}

module.exports = serviceUsers;
