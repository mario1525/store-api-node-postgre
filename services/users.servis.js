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

  agregar() {

  }

  find(){
    return this.user;
  }

  findOne(id){
    return this.user.find((item) => item.id === id);
  }

  update(){

  }

  delete(){

  }

}

module.exports = serviceUsers;
