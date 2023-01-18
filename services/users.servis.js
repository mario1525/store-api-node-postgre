const faker = require('faker');

class serviceUsers {

  constructor() {
    this.user = [];
    this.generar();
  }

  generar(){
    const limit = 50;
    for(let i = 0; i < limit; i++ ){
      this.user.push({
        id: faker.datatype.uuid(),
        name: faker.name.findName(),
        Email: faker.internet.email(),
      })
    }
  }

  create(data) {
    const newUser = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.user.push(newUser);
    return newUser;
  }

  find() {
    return this.user;
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
