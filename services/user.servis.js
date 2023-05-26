const boom = require('@hapi/boom');

const { models } = require('../libs/sequelize');

class PerfilService {
  constructor() {}

  async create(data) {
    const newPerfil = await models.Perfil.create(data);
    return newPerfil;
  }

  async find() {
    const rta = await models.Perfil.findAll({
      include: ['user'],
    });
    return rta;
  }

  async findOne(id) {
    const user = await models.Perfil.findByPk(id);
    if (!user) {
      throw boom.notFound('user not found');
    }
    return user;
  }

  async update(id, changes) {
    const perfil = await this.findOne(id);
    const rta = await perfil.update(changes);
    return rta;
  }

  async delete(id) {
    const perfil = await this.findOne(id);
    await perfil.destroy();
    return { id };
  }
}

module.exports = PerfilService;
