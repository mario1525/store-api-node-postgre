const Joi = require('joi');

const id = Joi.number();
const id_usuario = Joi.number();
const date = Joi.date().greater('now');

const createOrdenschema = Joi.object({
  id_usuario: id_usuario.required(),
  fecha: date.required(),
});

const updateOrdenschema = Joi.object({
  id_usuario: id_usuario,
  fecha: date,
});

const getOrdenschema = Joi.object({
  id: id.required(),
});

module.exports = { createOrdenschema, updateOrdenschema, getOrdenschema };
