const { boom } = require('@hapi/boom');
const { models } = require('../libs/sequelize');

class categoryservices {
  async create(data) {
    const newcategory = await models.Category.create(data);
    return {
      newcategory,
    };
  }

  async find() {
    const data = await models.Category.findAll();
    return {
      data,
    };
  }

  async findone(id) {
    const category = await models.Category.findByPk(id, {
      include: ['products'],
    });
    if (!category) {
      boom.notFound('category not found ');
    }
    return {
      category,
    };
  }

  async update(id, changes) {
    const category = await models.Category.findByPk(id);
    if (!category) {
      boom.notFound('category not found ');
    }
    const rta = await category.update(changes);
    return {
      rta,
    };
  }

  async delete(id) {
    const category = await models.Category.findByPk(id);
    await category.destroy();
    return { rta: true };
  }
}
module.exports = categoryservices;
