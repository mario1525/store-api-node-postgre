//codigo para desarrollo
const faker = require('faker');

class categoryservices {

  constructor(){
    this.category = [];
    this.generate();
  }

  generate(){
    const limit = 10;
    for (let i = 0; i< limit; i++ ){
      this.category.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
      })
    }
  }

  create(data){
    const newcategory = {
      id: faker.datatype.uuid(),
      ...data
    }
    this.category.push(newcategory);
    return newcategory;
  }

  find(){
    return this.category;
  }

  findone(id){
    return this.category.find((item) => item.id === id);
  }

  update(id , changes){
    const index = this.category.findIndex(item => item.id === id);
    if (index === -1){
      throw new Error('category not found');
    }
    const category = this.category.findIndex(item => item.id === id);
    this.category[index] ={
      ...category,
      ...changes,
    }
    return this.category[index];
  }

  delete(id){
    const index = this.category.findIndex(item => item.id === id );
    if(index === -1){
      throw new Error('category not found');
    }
    this.category.splice(index, 1);
    return {id}
  }

}

module.exports = categoryservices;
