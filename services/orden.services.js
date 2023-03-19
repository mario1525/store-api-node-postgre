const { boom } = require('@hapi/boom');
const { models } = require('./../libs/sequelize');

class servisorden {
  constructor() {}

  async create(data) {
    const newOrden = await models.Orden.create(data);
    return {
      newOrden,
    };
  }
  async find() {
    const data = await models.Orden.findAll();
    return {
      data,
    };
  }
  async findOne(id) {
    const orden = await models.Orden.findByPk(id);
    if (!orden) {
      boom.notFound('orden not found ');
    }
    return {
      orden,
    };
  }
  async update(id, changes) {
    const rta = await this.findOne(id).update(changes);
    return {
      rta,
    };
  }
  async delete(id) {
    return id;
  }
}

module.exports = servisorden;
