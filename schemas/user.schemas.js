const Joi = require('joi');

const id = Joi.number().integer();
const Email = Joi.string().email({
  minDomainSegments: 2,
  tlds: { allow: ['com', 'net'] },
});
const password = Joi.string().min(8);

const createUSerSchema = Joi.object({
  Email: Email.required(),
  password: password.required(),
});

const updateUserSchema = Joi.object({
  Email,
  password,
});

const getUserSchema = Joi.object({
  id: id.required(),
});

module.exports = { createUSerSchema, updateUserSchema, getUserSchema };
