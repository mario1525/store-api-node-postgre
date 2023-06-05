const { boom } = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class servisorden {
  constructor() {}

  async create(data) {
    const newOrder = await models.Order.create(data);
    return newOrder;
  }

  async addItem(data) {
    const newItem = await models.OrderProduct.create(data);
    return newItem;
  }

  async find() {
    const data = await models.Order.findAll();
    return {
      data,
    };
  }

  async findOne(id) {
    const order = await models.Order.findByPk(id);
    if (!order) {
      boom.notFound('orden not found ');
    }
    return {
      order,
    };
  }

  async update(id, changes) {
    const model = await this.findOne(id);
    const rta = model.update(changes);
    return {
      rta,
    };
  }

  async delete(id) {
    const model = await this.findOne(id);
    await model.destroy();
    return { rta: true };
  }
}

module.exports = servisorden;
