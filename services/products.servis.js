const { boom } = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class productservice {
  constructor() {}

  async create(data) {
    const newProduct = await models.Product.create(data);
    return {
      newProduct,
    };
  }

  async find() {
    const data = await models.Product.findAll({
      include: ['category'],
      offset: 0,
      limit: 10,
    });
    return {
      data,
    };
  }

  async findOne(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    return {
      product,
    };
  }

  async update(id, changes) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      boom.notFound('product not found ');
    }
    const rta = await product.update(changes);
    return {
      rta,
    };
  }

  async delete(id) {
    const product = await models.Product.findByPk(id);
    if (!product) {
      boom.notFound('product not found');
    }
    await product.destroy();
    return { id };
  }
}

module.exports = productservice;
