

class servisorden {

  constructor(){
    this.orden = [];
  }

  async create(data) {
    return data;
  }
  async find() {
  }
  async findOne(id) {
    return id;
  }
  async update(id, changes) {
    return id , changes;
  }
  async delete(id) {
    return id;
  }
}

module.exports = servisorden;
