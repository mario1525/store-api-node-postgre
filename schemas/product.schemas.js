const Joi = require('joi');

const id = Joi.number();
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const detalles = Joi.string();

const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  detalles: detalles.required(),
});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  detalles: detalles,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
