const Joi = require('joi');

const id = Joi.number().integer();
const userId = Joi.number();

const createOrdenschema = Joi.object({
  userId: userId.required(),
});

const updateOrdenschema = Joi.object({
  userId: userId,
});

const getOrdenschema = Joi.object({
  id: id.required(),
});

module.exports = { createOrdenschema, updateOrdenschema, getOrdenschema };
