const faker = require('faker');
const sequelize = require('../libs/sequelize')

class serviceUsers {

  constructor() {
    this.user = [];

  }

  generar(){  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.user.push(newUser);
    return newUser;
  }

  async find() {
    const query = 'select * FROM Usuario';
    const [data, metadata] = await sequelize.query(query);
    return {
      data,
      metadata
    };
  }

  findone(id) {
    return this.user.find((item) => item.id === id);
  }

  update(id, changes) {
    const index = this.user.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('user not found');
    }
    const users = this.user[index];
    this.products[index]= {
      ...users,
      ...changes
    }
    return this.user[index];
  }

  delete(id) {
    const index = this.user.findIndex(item => item.id === id);
    if (index === -1) {
      throw new Error('user not found');
    }
    this.user.splice(index, 1);
    return { id }
  }
}

module.exports = serviceUsers;
