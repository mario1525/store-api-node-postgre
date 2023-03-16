const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const detalles = Joi.string();
const idCategoria = Joi.number();


const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  detalles: detalles.required(),
  category: Joi.object({
    name: name.required(),
  })

});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  detalles: detalles,
  idCategoria: idCategoria
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
