//codigo para desarrollo
const faker = require('faker');

class categoryservices {

  constructor(){
    this.category = [];
    this.generator();
  }

  generator(){
    const limit = 10;
    for (let i = 0; i< limit; i++ ){
      this.category.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
      })
    }
  }

  create(){
  }

  find(){
    return this.category;
  }

  findone(id){
    return this.category.find((item) => item.id === id);
  }

  update(){
  }

  delete(){}

}

module.exports = categoryservices;
